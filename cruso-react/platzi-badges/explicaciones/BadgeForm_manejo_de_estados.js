//Aca vamos a enlazar eventos con onEventHandlers

import React from 'react';

class BadgeForm extends React.Component{
   
    state = {
        jobTittle: '',
        firstName: '',
        lastName: '',
        email: '',
        twitter: ''

    }
    handleChange = (e)=>{
        //Con este metodo de la libreria componentes, manejamos los estados,
        //los cuales son valores, guardados temporalmente en memoria, los cuales
        //podemosutilizar en otro componenete, otra pagina o en este mismo componenete.
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleClick = e =>{
        console.log("Button was clicked")
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("Button was clicked and handled with onSubmit");
        console.log(this.state);
    };
    
    render(){
        return(

            <div>
                <h1>New Attendant</h1>

                <form onSubmit = {this.handleSubmit}>
                    <div className="mb-3">
                        <label className ="form-label">First Name</label>
                        <input onChange={this.handleChange} 
                        className="form-control" 
                        type="text" 
                        name="firstName" 
                        value={this.state.firstName}/> {/*Iniciando value con this.state cambio los inputs de no controlados a controlados,
                        para no guardar dos veces el valor, una en el html y otra en state*/}
                    </div>

                    <div className="mb-3">
                        <label className ="form-label">Last Name</label>
                        <input onChange={this.handleChange} 
                        className="form-control" 
                        type="text" 
                        name="lastName" 
                        value={this.state.lastName}/>{/*Iniciando value con this.state cambio los inputs de no controlados a controlados,
                         para no guardar dos veces el valor, una en el html y otra en state*/}
                    </div>

                    <div className="mb-3">
                        <label className ="form-label">Email</label>
                        <input onChange={this.handleChange} 
                        className="form-control" 
                        type="email"
                         name="email" 
                         value={this.state.email}/>{/*Iniciando value con this.state cambio los inputs de no controlados a controlados,
                          para no guardar dos veces el valor, una en el html y otra en state*/}
                    </div>

                    <div className="mb-3">
                        <label className ="form-label">Job Tittle</label>
                        <input onChange={this.handleChange} 
                        className="form-control" 
                        type="text" 
                        name="jobTittle" 
                        value={this.state.jobTittle}/> {/*Iniciando value con this.state cambio los inputs de no controlados a controlados,
                         para no guardar dos veces el valor, una en el html y otra en state*/}
                    </div>

                    <div className="mb-3">
                        <label className ="form-label">Twitter</label>
                        <input onChange={this.handleChange} 
                        className="form-control" 
                        type="text" 
                        name="twitter" 
                        value={this.state.twitter}/>{/*Iniciando value con this.state cambio los inputs de no controlados a controlados,
                         para no guardar dos veces el valor, una en el html y otra en state*/}
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    };
}

export default BadgeForm;
