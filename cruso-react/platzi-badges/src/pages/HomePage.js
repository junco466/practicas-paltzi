import React from 'react';
import Astronautas from '../images/astronauts.svg';
import logo from '../images/platziconf-logo.svg';
import { Link } from 'react-router-dom';
import './styles/HomePage.css'

class HomePage extends React.Component{
    render(){
        return(
            <React.Fragment>

                <div className = 'hompage_container'>
                    <div className = 'logo'>
                        <div className = "Logo__img">
                            <img src = {logo} alt = 'astronautas de fondo'/>
                        </div>

                        <div>
                        <h2><br/>Print your badges:</h2>
                        <p>The best way to manage your conference</p>
                        </div>
                        
                        <div><Link to="/badges" className="btn btn-primary btn__start">Start now</Link></div>
                    </div>

                    <div className = "astronautas">
                        <img src = {Astronautas} alt = 'astronautas de fondo'/>
                    </div> 
                </div>
                


            </React.Fragment>
        )
    }
}

export default HomePage