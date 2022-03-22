//Esta pagina es como la plantilla principal, aqui colocaremos lo que practicamente
//se repite en todas las paginas, cosas como el Navbar, o un footer por ejemplo,
//esto para ahorrar codigo, en las demas paginas, podemos borrar por ejemplo Navbar de donde
//antes lo utilizabamos y renderizarlo aqui.

//Cosas importantes: Primero observemos que como en el componente App, aca no usamos una clase, sino
//una simple funcion, esto es porque en ninguna de las 2 utilizamos estados, o metodos, todo lo importamos
//de otros componenete, por esto se permite hacerlo asi.
//Tambien notemos la forma de pasar props es distinta, debo pasarlo como parametro. Tambien cabe acotar, que 
//en este caso usamos un prop, que todos los elementos de react traen por defecto, el cual es children, seto
//se usa en aquellas etiquetas JSX como layout, que donde se define, tiene otras etiquetas por dentro. esto lo 
//podemos apreciar mejor en App.js, y este prop no hay que declararlo.
//Por ultimo notemos el React.Fragment, Este es muy util para tener una mejor sintaxis, resulta que como mencione en
//App.js las etiquetas JSX solo se les permite tener un solo elemento, para este objetivo, estabamos metiendo todos los
//elemntos en un <div></div> pero esto no es optimo a la hora de renderizar el codigo en el google devtools. se llena todo de 
//divs, y esto lo resuelve React.Fragment, el cual no se renderiza como etiqueta, y me sirve para empaquetar codigo.

import React from 'react';

import Navbar from './Navbar';

function Layout(props){
    return (
        <React.Fragment>
            <Navbar/>
            {props.children}
        </React.Fragment>
    )
}

export default Layout;