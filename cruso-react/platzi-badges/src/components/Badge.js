import React from 'react';

//importo una imagen de una carpeta y lo guarde en una variable
//para seru usada en nuestro codigo agragndola con jsx
import confLogo from '../images/badge-header.svg'

//Importo los estilos del componente Badge.css
import './styles/Badge.css'

class Badge extends React.Component{
    render(){
        return (
            //en react, para no confundirse con la palabra clave class, usamos className
            //para asignar una clase, (las clases del css).
            <React.Fragment>
                <div className = "Badge__header">
                    {/*Pasamos la imagen como una variable confLogo exportada de un directorio externo*/}
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div>

                <div className = "Badge__section-name">
                    {/*Usamos gravatar para traer una avatar de esta aplicacion*/}
                    <img className = "Badge__avatar" src={this.props.avatarUrl} alt="Avatar"/>
                    <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
                </div>

                <div className = "Badge__section-info">
                    <h3>{this.props.jobTittle}</h3>
                    <div>@{this.props.twitter}</div>
                </div>
                <div className="Badge__footer">#platziconf</div>
            </React.Fragment>
        );
    };

}

export default Badge