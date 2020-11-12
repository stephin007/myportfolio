import React, {Component} from 'react'

import '../css/home.css'

class Home extends Component{
    render(){
        return (
                <div className="main-container">
                    <div className="main-content">
                        <section className="home section">
                            <div className="container">
                                <div className= "intro">
                                    <img src="https://res.cloudinary.com/stephin/image/upload/v1604627672/portfolio/homepageimg_qbbhnl.png" alt="Profile Img" className="shadow-img" />
                                    <h1>Stephin T Reji</h1>
                                    <p>I am a technically savvy customer success intern who is constantly striving for change and betterment</p>
                                    <div className="social-links">
                                        <a href="https://github.com/stephin007" target="_blank" rel = "noopener noreferrer"><i className= "fab fa-github" /></a>
                                        <a href="https://dev.to/stephin007" aly="stephin007's DEV Profile"target="_blank" rel = "noopener noreferrer"><i class="fab fa-dev" ></i></a>
                                        <a href="https://twitter.com/reji_stephin" target="_blank" rel = "noopener noreferrer"><i className= "fab fa-twitter" /></a>
                                        <a href="https://wa.me/918860102173?text=Would%20love%20to%20talk%20with%20you" target="_blank" rel = "noopener noreferrer"><i className= "fab fa-whatsapp" /></a>
                                        <a href="https://www.facebook.com/stephin.reji1998" target="_blank" rel = "noopener noreferrer"><i className= "fab fa-facebook" /></a>
                                        <a href="https://www.linkedin.com/in/stephinreji" target="_blank" rel = "noopener noreferrer"><i className= "fab fa-linkedin" /></a>
                                        <a href="https://www.instagram.com/the_spectacled_one/?hl=en" target="_blank" rel = "noopener noreferrer"><i className= "fab fa-instagram"  /></a>
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
