//Aca vamos a enlazar eventos con onEventHandlers

import React from 'react';

class BadgeForm extends React.Component{
    
    handleClick = e =>{
        console.log("Button was clicked")
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("Button was clicked and handled with onSubmit");
        console.log(this.props.formValues);
    };

    render(){
        return(

            <React.Fragment>
                <h1>New Attendant</h1>

                <form onSubmit = {this.handleSubmit}>
                    <div className="mb-3">
                        <label className ="form-label">First Name</label>
                        <input onChange= {this.props.onChange}
                        className="form-control" 
                        type="text" 
                        name="firstName" 
                        value={this.props.formValues.firstName}/> {/*Realizo la inicializacion de las variables de estado en el BadgeNew,y luego
                        la paso como prop, para poder generar los input controlados, ademas en el envento onChange, tambien el prop onChange, el cual
                        contiene a la funcion que viene de BadgeNew y que me permitira manipular y darle valores a las variables de estado*/}
                    </div>

                    <div className="mb-3">
                        <label className ="form-label">Last Name</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="lastName" 
                        value={this.props.formValues.lastName}/>{/*Realizo la inicializacion de las variables de estado en el BadgeNew,y luego
                            la paso como prop, para poder generar los input controlados, ademas en el envento onChange, tambien el prop onChange, el cual
                            contiene a la funcion que viene de BadgeNew y que me permitira manipular y darle valores a las variables de estado*/}
                    </div>

                    <div className="mb-3">
                        <label className ="form-label">Email</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="email"
                         name="email" 
                         value={this.props.formValues.email}/>{/*Realizo la inicializacion de las variables de estado en el BadgeNew,y luego
                            la paso como prop, para poder generar los input controlados, ademas en el envento onChange, tambien el prop onChange, el cual
                            contiene a la funcion que viene de BadgeNew y que me permitira manipular y darle valores a las variables de estado*/}
                    </div>

                    <div className="mb-3">
                        <label className ="form-label">Job Tittle</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="jobTittle" 
                        value={this.props.formValues.jobTittle}/> {/*Realizo la inicializacion de las variables de estado en el BadgeNew,y luego
                            la paso como prop, para poder generar los input controlados, ademas en el envento onChange, tambien el prop onChange, el cual
                            contiene a la funcion que viene de BadgeNew y que me permitira manipular y darle valores a las variables de estado*/}
                    </div>

                    <div className="mb-3">
                        <label className ="form-label">Twitter</label>
                        <input onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="twitter" 
                        value={this.props.formValues.twitter}/>{/*Realizo la inicializacion de las variables de estado en el BadgeNew,y luego
                            la paso como prop, para poder generar los input controlados, ademas en el envento onChange, tambien el prop onChange, el cual
                            contiene a la funcion que viene de BadgeNew y que me permitira manipular y darle valores a las variables de estado*/}
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </React.Fragment>
        );
    };
}

export default BadgeForm;
