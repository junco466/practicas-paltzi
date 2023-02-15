//La pagina App, es la pagina donde se administran todas las rutas
//de mi aplicacion, aqui se utiliza ReactRouter, para hacer que esta sea una
//Single App application, y esta tenga un desempeño muchisimo mejor(es mas rapida).
//Debemos tener en cuenta las siguientes caracteristicas de react-router-dom:
//  -<BrowserRouter> este simplementa nos inidica que vamos a trabajar con una
//      SPA, y que vamos a manejar diferentes rutas con la libreria.
//  -<Switch> Este sirve porque en general las etiquetas JSX como BrowserRouter
//      solo se les puede devolver un componenete, y habria que ingresar un div,
//      no es optimo, y usamos Switch, en la nueva version de la librerira el switch
//      ya no es nescesario.
//  -<Route> Lo usamos para indicar hacia que pagina, o componente apunta el path,
//      en otras palabras enruta por ejemplo "/badges" hacia la pagina badges, en el navegador
//      escribiremos localhost/badges, he ira a la pagina Badges que hemos creado.
//  -Parametro "exact": si no usamos este parametro, react leera que la ruta /badges/news, tiene inicialmente
//      una ruta /badges, y desplegara el contenido de la pagina Badges, porque se le parece el path, y luego ira,
//      al link badges/new y desplegara BadgesNew, para evitar esto le decimos que cargue 'Exactamente' la ruta que le pedimos.

import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import Layout from './Layout';
import MiComponente404 from '../pages/MiComponente404';

function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badges}/>
                    <Route exact path="/badges/new" component={BadgeNew}/>
                    <Route path="/404" component={MiComponente404} />
                    {/*Redirect lo utilizamos, para redireccionar todo lo que no hallamos definido hacia la pagina /404, esta herramienta
                    viene de la libreria react-router-dom */}
                    <Redirect from="*" to="/404" />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;

