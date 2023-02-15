//Esta es una pagina principal donde presentaremos toda la informacion, de los badges registrados.
//En esta pagina agragaremos 2 componentes, Navbar, previamente hecha, y haremos una nuevo componenete
//BadgesList, con la cual crearemos varias tarjetas de presentacion, de diferentes usuarios,
//usando una base de datos pequeña, incluida en esta misma pagina, adema usaremos la funcion map,
//para presentar la informacion obtenida de la base de datos.

import React from 'react';

//En react para poder utilizar single application pages, no podemos usar el elemento ancla,
//tambien conocida como etiqueta <a></a>. Porque este hara recargar y renderizar de nuevo,
//la pagina completa, y react trata de evitar esto para mejorar su eficiencia y rendimiento.
//la etiqueta Link que provee la librerira react-router-dom, nos permite evitar esto,
// e internamente hara que solo renderice el componente q nescesitamos, no recarga toda la pagina.
import { Link } from 'react-router-dom';

import BadgesList from '../components/BadgesList';

import confLogo from '../images/badge-header.svg'
import './styles/Badges.css'

class Badges extends React.Component{
    
    state = {

        //Base de datos incluida en el estado inical de la pagina
        data: [
          {
            id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
            firstName: 'Freda',
            lastName: 'Grady',
            email: 'Leann_Berge@gmail.com',
            jobTitle: 'Legacy Brand Director',
            twitter: 'FredaGrady22221-7573',
            avatarUrl:
              'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
            firstName: 'Major',
            lastName: 'Rodriguez',
            email: 'Ilene66@hotmail.com',
            jobTitle: 'Human Research Architect',
            twitter: 'MajorRodriguez61545',
            avatarUrl:
              'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
          },
          {
            id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
            firstName: 'Daphney',
            lastName: 'Torphy',
            email: 'Ron61@hotmail.com',
            jobTitle: 'National Markets Officer',
            twitter: 'DaphneyTorphy96105',
            avatarUrl:
              'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
          },
        ],
      };


    render(){
        return (
            <React.Fragment>
                
                {/*Hero o portada creada con los estilos badges */}
                <div className="Badges">
                    <div className="Badges__hero">
                         <div className="Badges__container">
                             <img className = "Badges_conf-logo" src={confLogo} alt="Conf logo"/>
                         </div>
                    </div>
                </div>
                
                {/*Boton*/}
                <div className = "Badge__container">
                    <div className = "Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>

                    {/*Lista dinamica, obteniendo los datos desde la base de datos anteriormente denotada,
                    ademas se creo un componente nuevo llamado BadgesList, donde le pasamos como prop la base de datos,
                    este componente hara el procesamiento de estos datos, para presentarlos en pantalla. */}
                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data}/>              
                        </div>
                    </div>
                </div>  
            </React.Fragment>  
        );
    }    
}

export default Badges;