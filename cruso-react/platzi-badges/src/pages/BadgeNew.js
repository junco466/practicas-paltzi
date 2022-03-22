//librerias React
import React from 'react';

//utilerias
import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'

//Componentes
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component{

    //inicialice el estado para poder hacer inputs controlados
    state = {
        form:{
            jobTittle: '',
            firstName: '',
            lastName: '',
            email: '',
            twitter: ''
        },
    };

    //uso la funcion de cambio de estado desde la pagina y la envio como un prop al componenete
    handleChange = (e)=>{
        this.setState({
            //recordar que si inicialice un objeto aca debo cambiar un objeto, en esto me quede mucho tuempo arreglando
            //uso el spread operator, para que no se sobreescriba form, sino que mantega los valores anteriores
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            }  
        });
    };

    render(){
        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            {/*Pasamos las variables que se encuentran en la variable de estdo al Badge como props
                            esto con el objetivo de tener un cambio dinamico en el badge, a medida que escribo aparece el texto */}
                            <Badge
                            firstName= {this.state.form.firstName}
                            lastName = {this.state.form.lastName}
                            twitter = {this.state.form.twitter}
                            jobTittle= {this.state.form.jobTittle}
                            email = {this.state.form.email}
                            avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                            />
                        </div>
                        <div className="col-6">
                            {/*pasando la funcion handleChange como prop, la cual contiene el manejador de estados, es de la manera
                            que realizamos el levantamiento del estado, ya que estas varibles van a estar disponibles en esta pagina
                            y no solo en el componenete de BadgeForm, y podemos manipular la pagina de acuerdo a sus valores,a demas
                            enviamos la inicializacion del estado como prop para generar los input controlados en BadgeForm. */}
                            <BadgeForm onChange = {this.handleChange} formValues = {this.state.form}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    };
} 

export default BadgeNew;