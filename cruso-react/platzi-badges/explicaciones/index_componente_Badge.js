import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge'

import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

const container = document.getElementById('app');
//<Badge/> se puede pasar como una etiqueta JSX, ya que todos los componentes
//de react, se puede trabajar como elementos u objetos. y a este le podemos
//pasar unos props, los cales son parametros que luego usaremos como variables
//en el componenete Badge.
ReactDOM.render(<Badge 
    //De esta manera definimos los props, para luego usarlos en el componenete
    //cabe notar que se parecen a los atributos de una etiqueta.
    firstName="Juan Camilo" 
    lastName = "Sepulveda"
    avatarUrl = "https://www.gravatar.com/avatar?d=identicon"
    jobTittle = "Software engineer"
    twitter = "ShorlakDev"
    />, container);