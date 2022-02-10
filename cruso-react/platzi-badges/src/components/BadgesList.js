import React from 'react';

class BadgesList extends React.Component{
    render(){
        return (

            //Se crea una lista sin estilos(para que se vea bien), obtenemos la base de datos como un porp,
            //llamado badges, y le hacemos un mapeo a la lista de la base de datos. Cuando usamos listas,
            //debemos usar una key para que react reconozca en el render, que no esta repitiendo elementos,
            //si no hacemos este key unico (por lo general un id), en consola nos aparecera un error.
            //Por ultimo retornamos he imprimimos como un parrafo los nombres y apellidos de la base de datos.
            //como tarea, hay que darle los estilos necesarios, y ligarlo a la pagina.
            <ul className="list-unstyled">
                {this.props.badges.map((badge)=>{
                    return(
                    <li key={badge.id}>
                        <p>{badge.firstName} {badge.lastName}</p>
                    </li>)
                })}
            </ul>
        )
    }
}

export default BadgesList;