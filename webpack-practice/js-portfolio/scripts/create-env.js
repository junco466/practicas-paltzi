//este es un script, el cual vamos a ejecutar en el servidor con node,
//esto lo hacemos, ya que resulto un error a la hora de  hacer el deploy
//no teniamos las variables de entorno .env creadas en el servidor, ya que
//al ser ocultas y agregadas al git ignore, no se crean del lado del servidor,
//y por lo tanto la aplicacion no corre, aqui usamos la libreria fs, la cual,
//nos va a permitir ejecutar con node y crear una carpeta ./.env con dinamoco,
//ya que las variables de entorno se agregan al servidor directamente, en este caso
//netlify
const fs = require('fs');

fs.writeFileSync('./.env', `API=${process.env.API}\n`)