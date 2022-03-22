// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

//const element = <h1>Hello, Platzi Badges!</h1>;

//Expresiones con React.createElement() para introducir elementos
//en el html
/*const element = React.createElement(
    'a',//etiqueta
    {href: 'https://youtube.com'},//atributos
    'vamos a youtube con react'//childre (innerTEXT o innerHTML)
)*/

const nombre = "camilo";
// const element = React.createElement(
//     'h1',
//     {},
//     `Hola mi nombre es ${nombre}`
// )


//expresiones con jsx, Dentro de {} pueden ir expresiones
//de javascript, (if,for,sumas,operaciones matematica,etc..)
//const jsx = <h1>Hola, mi nombre es {nombre}</h1>

const jsx =
    <div>
        <h1>Hola, soy camilo</h1>
        <p>soy desarrollador de software</p>
    </div>

const container = document.getElementById('app');
// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(/*element*/jsx, container);
