import React, {Component} from 'react'

import '../css/contact.css'

class Contact extends Component{
    render(){    
        return (
            <section className="contact section">
                <div className="container">
                    <div className="row">
                        <div className="section-title padd-15">
                            <h2>Contact Me</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="contact-info-item padd-15">
                            <div className="icon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <h4>Call Me On</h4>
                            <p>+91 8920 788 383</p>
                        </div>
                        <div className="contact-info-item padd-15">
                            <div className="icon">
                                <i className="fa fa-envelope"></i>
                            </div>
                            <h4>Email</h4>
                            <p><a href="mailto: stephinreji123@gmail.com">stephinreji123@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </section>
            )
        }    
}

export default Contact