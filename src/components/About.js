import React, {Component} from 'react'

import '../css/about.css'

class About extends Component{
    render(){    
        return (
                <section className="about section">
                    <div className="container">
                        <div className="row">
                            <div className="section-title padd-15">
                                <h2>About Myself</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="about-content padd-15">
                                <div className="row">
                                    <div className="about-text padd-15 ">
                                        <h3>Communication is the <span>key</span></h3>
                                        <p>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }    
}

export default About
