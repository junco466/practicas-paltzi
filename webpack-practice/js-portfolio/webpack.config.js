//libreria de node que me permite, realizar tareas relacionadas con el path,
//como por ejemplo utilizar el path actual del archivo que este trabajando,
//y evita que escriba a mano la direccioj completa.
const path = require('path');

//plugin para que webpack procese y minifique los archivos html del proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin');

//este plugin sirve para trabajar con css, dividido en diferentes partes
//de la aplicaion y luego unirlo.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//plugin para copiar archivos (epecialmente de medios) en la carpeta principal
//de webpack dist, aunque hay mejores metodos para agragarlos.
const CopyPlugin = require('copy-webpack-plugin');

//este plugin ayuda a minificar y optimizar el codgio css, se utiliza especialmente
//en el modo produccion.
const CssMinimizarPlugin = require('css-minimizer-webpack-plugin');

//optimiza y minifica mas los archivos JS, usado especialmente en el modo produccion
const TerserPlugin = require('terser-webpack-plugin'); 

//plugin para el manejo de varibes de entrno de la aplicacion
const Dotenv = require('dotenv-webpack');

//esta linea es para que se agrgue ayuda de autocompletado al
//archivo de configuraciones de webpack, nos facilita la vida
/** @type {import('webpack').Configuration} */

module.exports = {

    //punto de entrada aplicacion
    entry: './src/index.js',

    //salida hacia donde van los archivos preparados por webpack
    //webpack tiene un nombre ya especifico para esto (default)
    //carpeta dist (distribution)

    output: {
        //path.resolve() viene del require de node, que me ayuda
        //para determinar el directorio actual del proyecto, asi evitamos
        //errores posteriores, que se refieran al path. aca le decimos, guade
        //nuestro proyecto en la (__dirmname)carpeta_actual/dist.
        path: path.resolve(__dirname, 'dist'),

        //nombre del archivo de salida de webpack
        filename: '[name].[contenthash].js',

        //Espesificamos el nombre de la carpeta donde se van a guardar los
        //assets (imagenes,fuentes,etc).
        assetModuleFilename: 'assets/images/[hash][ext][query]',
        
        clean: true,
    },
    resolve:{
        //extensiones que se van a trabajar en nuetro proyecto
        extensions: ['.js'],

        //alias de path para usar en nuestro proyecto y optimizar estas direcciones
        alias:{
            '@utils': path.resolve(__dirname, 'src/utils/'),
            '@templates': path.resolve(__dirname, 'src/templates/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@images': path.resolve(__dirname, 'src/assets/images/'),
        }
    },

    //con la propiedad module, webpack pa a cargar los laders para
    //nuestra aplicacion, ¿y que es un loader? Un Loader indica a Webpack
    // cómo tiene que transformar el código de un módulo en el concreto.
    //El navegador solo entiene javascript, html y css, por lo que por ejemplo
    //queremos usar herramientas como typescript, o preprocesadores de de css
    //como sass, webpack puede encontrar estas extensiones con una expresion
    //regular que le damos en la regla test, y luego con use, hacemos uso del
    //loader que necesitemos, en este caso, como vamos a utilziar ecmascript 6 ,
    //existe la posibilidad que no todos los navegadores lo lean, por lo que,
    //utilizaremos babel que transpila el codgio a ECS5, que es una version de
    //JavaScript que puede ser mas accesible a todos los navegadores.
    module:{

        //este loader va tener una serie de reglas que yo puedo establecer.
        rules: [
            { 
                //voy a determinar para el lader babel que tipos de extensiones va a
                //buscar, para procesarlas, este test, se hace mediante el
                //uso de expresiones regulares, la expresion regular que
                //veremos a continuacion quiere decir que utiliza cualquier
                //extension .mjs, o .js, mjs es la extension de modulos de js
                test: /\.m?js$/,

                //voy a excluir los elementos javascript o modulos que se encuentren,
                //en nodemodules, porque la aplicacion se romperia.
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            //loader CSS y preprocesadores
            {
                test: /\.css|.styl$/i,
                use: [MiniCssExtractPlugin.loader,'css-loader','stylus-loader'],
            },
            //Copia de recursos 'imagenes y iconos' a la carpeta dist
            {
                test: /\.png/,
                type: 'asset/resource'
            },
            //Loader para mover archivos o fuentes, urls.
            /*Opcion 1 por algun motivo no funciona bien
            {
                test: /\.(woff|woff2)$/,
                use:{
                    loader: 'url-loader',
                    //opciones para indcicar donde estan los archivos,
                    //y otras configuraciones.
                    options: {
                        //tamaño en bytes de los archivos.
                        limit: 10000,
                        //establece el tipo del MIME(Multipurpose Internet Mail Extensions)
                        //o tipos de url que van a ser transformadas.
                        mimetype: "application/font-woff",
                        //especifica, nombre y extension como filename
                        name: "[name].[ext]",
                        outputPath: "./assets/fonts/",
                        publicPath: "./assets/fonts/",
                        esModule: false,
                    },
                }
            }*/
            {
                test: /\.(woff|woff2)$/,
                type: 'asset/resource',
                generator:{
                    filename: "assets/fonts/[name].[contenthash].[ext]"
                }
            }

        ]
    },
    plugins:[
        new HtmlWebpackPlugin({

            //el lugar donde voy a inyectar el js en el html,
            //inject recibe, true, false, head, body.
            inject: 'body',
            
            //donde va a estar el archivo html del que se va a,
            //basar para realizar el bundle, en este caso tomaremos,
            //el html que esta en la carpeta public
            template: './public/index.html',

            //nombre del archivo generado por webpack.
            filename: './index.html'
        }),

        //plugin para manejar el css modular,y ademas agregamos un hash
        // a estos archivos CSS.
        new MiniCssExtractPlugin({
            filename: "assets/[name].[contenthash].css"
        }),

        //plugin para copiar carpetos, donde le establecemos una carpeta origen, 
        //y una carpeta de destino.
        new CopyPlugin({
            patterns:[
                {
                    from: path.resolve(__dirname,"src", "assets/images"),
                    to:"assets/images"
                }
            ]
        }),

        //Objeto, para el uso del plguin que maneja las vatiables de entorno
        new Dotenv(),
    ],

    //configuracion de optiizacion, donde usamos los plugin para minificar
    //tanto el CSS como el JS
    optimization:{
        minimize: true,
        minimizer:[
            new CssMinimizarPlugin,
            new TerserPlugin,
        ]
    }
}