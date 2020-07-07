import React, {Component} from 'react'
// import {Link} from 'react-router-dom'

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
                                    <p>I am a technically savvy customer success intern who is constantly striving for change and betterment</p>
                                    <div className="social-links">
                                        <a href="https://github.com/stephin007" target="_blank" rel = "noopener noreferrer"><i className= "fa fa-github"></i></a>
                                        <a href="https://twitter.com/reji_stephin" target="_blank" rel = "noopener noreferrer"><i className= "fa fa-twitter"></i></a>
                                        <a href="https://wa.me/918860102173?text=Would%20love%20to%20talk%20with%20you" target="_blank" rel = "noopener noreferrer"><i className= "fa fa-whatsapp"></i></a>
                                        <a href="https://www.facebook.com/stephin.reji1998" target="_blank" rel = "noopener noreferrer"><i className= "fa fa-facebook"></i></a>
                                        <a href="https://www.linkedin.com/in/stephin-reji-a3439a186" target="_blank" rel = "noopener noreferrer"><i className= "fa fa-linkedin"></i></a>
                                        <a href="https://www.instagram.com/the_spectacled_one/?hl=en" target="_blank" rel = "noopener noreferrer"><i className= "fa fa-instagram" ></i></a>
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