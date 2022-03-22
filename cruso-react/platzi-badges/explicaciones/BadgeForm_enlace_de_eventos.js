//Aca vamos a enlazar eventos con onEventHandlers

import React from 'react';

class BadgeForm extends React.Component{
   
    //Manejadores de eventos tipo onEventHandlers, el primero maneja un cambio
    //en la caja de texto, el segundo ya que es un boton maneja el click.
    //El tercero es para manejar el evento  de cuando se envia informacion con un boton
    //tipo submit.
    handleChange = (e)=>{
        console.log({
            name: e.target.name,
            value: e.target.value,
        });

    }

    handleClick = e =>{
        console.log("Button was clicked")
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("Button was clicked and handled with onSubmit");
    }
    
    render(){
        return(

            <div>
                <h1>New Attendant</h1>

                {/*Aqui le doy el evento submit, y lo manejo con la fujcion handleSubmit, esto es similar para los otros eventos */}
                <form onSubmit = {this.handleSubmit}>
                    <div className="mb-3">
                        <label className ="form-label">First Name</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="firstName"/>
                    </div>

                    {/*El tipo por defaul de un boton en un formulario es submit, para qeu la informacion no se envie automaticamente
                    para cambiar la URL con la informacion enviada. Cambiamos el tipo a button, o podemos dejar el submit, y manejar su eveneto con el handleSubmit
                    realizado en este codigo, utilizando el e.preventDefault(); para no permitir q tenga sus funciones por default. */}
                    <button type="button" onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    };
}

export default BadgeForm;
