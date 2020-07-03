import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import '../css/home.css'

import profileimage from '../img/homeimg.png'

class Home extends Component{
    render(){    
        return (
                <div className="main-container">
                    <div className="main-content">
                        <section className="home section">
                            <div className="container">
                                <div className= "intro">
                                    <img src={profileimage} alt="Profile Img" className="shadow-img" />
                                    <h1>Stephin T Reji</h1>
                                    <p>I'm a Customer Sucess Manager with a little knowledge about Front End Development</p>
                                    <div className="social-links">
                                        <Link to="/"><i class= "fa fa-github"></i></Link>
                                        <Link to="/"><i class= "fa fa-twitter"></i></Link>
                                        <Link to="/"><i class= "fa fa-facebook"></i></Link>
                                        <Link to="/"><i class= "fa fa-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            )
        }    
}

export default Home