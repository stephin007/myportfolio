import React, {Component} from 'react'

import '../css/about.css'

class About extends Component{
    render(){    
        return (
                <section className="about section">
                    <div className="container">
                        <div className="row">
                            <div className="section-title padd-15">
                                <h2>About Me</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="about-content padd-15">
                                <div className="row">
                                    <div className="about-text padd-15 ">
                                        <h3>Communication is the <span>key</span></h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="personal-info padd-15">
                                        <h3 className="pi-title">
                                            Personal Information
                                        </h3>
                                        <div className="row">
                                            <div className="info-item padd-15">
                                                <p>Birthday : <span>22 June 1998</span></p>
                                            </div>
                                            <div className="info-item padd-15">
                                                <p>Age : <span>22</span></p>
                                            </div>
                                            <div className="info-item padd-15">
                                                <p>Email : <span><a href="mailto: stephinreji123@gmail.com">stephinreji123@gmail.com</a></span></p>
                                            </div>
                                            <div className="info-item padd-15">
                                                <p>Degree : <span>B.Tech</span></p>
                                            </div>
                                            <div className="info-item padd-15">
                                                <p>Phone : <span><a href="tel:+91 8920 788 383">+91 8920 788 383</a></span></p>
                                            </div>
                                            <div className="info-item padd-15">
                                                <p>City : <span>Delhi</span></p>
                                            </div>
                                            <div className="info-item padd-15" id="language">
                                                <p>Languages Known : <span>English, Hindi, Malayalam</span></p>
                                            </div>
                                        </div>
                                        {/* <div className="row">
                                            <div className="buttons padd-15">
                                                <a href="https://www.google.com" className="bn">Download Resume</a>
                                                <a href="https://www.google.com" className="bn bn-space">Hire Me</a>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="skills padd-15">
                                        <div className="row">
                                            <h3 className="pi-title">
                                                Interpersonal Skills
                                            </h3>
                                            <div className="skill-item padd-15">
                                                <h5>Communication</h5>
                                                <div className="progress">
                                                    <div className="progress-in" style= {{width: "95%"}}></div>
                                                    <div className="skill-percent">95%</div>
                                                </div>
                                            </div>
                                            <div className="skill-item padd-15">
                                                <h5>Customer Service Skills</h5>
                                                <div className="progress">
                                                    <div className="progress-in" style= {{width: "90%"}}></div>
                                                    <div className="skill-percent">90%</div>
                                                </div>
                                            </div>
                                            <div className="skill-item padd-15">
                                                <h5>Team Work</h5>
                                                <div className="progress">
                                                    <div className="progress-in" style= {{width: "90%"}}></div>
                                                    <div className="skill-percent">90%</div>
                                                </div>
                                            </div>
                                            <div className="skill-item padd-15">
                                                <h5>Attention to Detail</h5>
                                                <div className="progress">
                                                    <div className="progress-in" style= {{width: "92%"}}></div>
                                                    <div className="skill-percent">92%</div>
                                                </div>
                                            </div>
                                        </div>   
                                    </div>
                                    <div className="skills padd-15" id="computerskills">
                                        <div className="row">
                                            <h3 className="pi-title">
                                                Computer Skills
                                            </h3>
                                            <div className="skill-item padd-15">
                                                <h5>Google Sheets/Docs</h5>
                                                <div className="progress">
                                                    <div className="progress-in" style= {{width: "80%"}}></div>
                                                    <div className="skill-percent">80%</div>
                                                </div>
                                            </div>
                                            <div className="skill-item padd-15">
                                                <h5>Notion</h5>
                                                <div className="progress">
                                                    <div className="progress-in" style= {{width: "75%"}}></div>
                                                    <div className="skill-percent">75%</div>
                                                </div>
                                            </div>
                                            <div className="skill-item padd-15">
                                                <h5>Jira</h5>
                                                <div className="progress">
                                                    <div className="progress-in" style= {{width: "65%"}}></div>
                                                    <div className="skill-percent">65%</div>
                                                </div>
                                            </div>
                                            <div className="skill-item padd-15">
                                                <h5>Adobe XD/Figma</h5>
                                                <div className="progress">
                                                    <div className="progress-in" style= {{width: "60%"}}></div>
                                                    <div className="skill-percent">60%</div>
                                                </div>
                                            </div>
                                        </div>   
                                    </div>
                                    <div className="skills padd-15" id="tools">
                                        <div className="row">
                                            <h3 className="pi-title">
                                                Languages/Tools/Libraries Known
                                            </h3>
                                            <div className="skill-item padd-15">
                                                <h5>Javascript</h5>
                                                <div className="progress">
                                                    <div className="progress-in" style= {{width: "40%"}}></div>
                                                    <div className="skill-percent">40%</div>
                                                </div>
                                            </div>
                                            <div className="skill-item padd-15">
                                                <h5>React</h5>
                                                <div className="progress">
                                                    <div className="progress-in" style= {{width: "50%"}}></div>
                                                    <div className="skill-percent">50%</div>
                                                </div>
                                            </div>
                                            <div className="skill-item padd-15">
                                                <h5>HTML</h5>
                                                <div className="progress">
                                                    <div className="progress-in" style= {{width: "80%"}}></div>
                                                    <div className="skill-percent">80%</div>
                                                </div>
                                            </div>
                                            <div className="skill-item padd-15">
                                                <h5>CSS</h5>
                                                <div className="progress">
                                                    <div className="progress-in" style= {{width: "70%"}}></div>
                                                    <div className="skill-percent">70%</div>
                                                </div>
                                            </div>
                                        </div>   
                                    </div>
                                </div>
                                <div className="row">
                                <div className="experience padd-15">
                                        <h3 className="title">
                                            Work Experience 
                                        </h3>
                                        <div className="row">
                                            <div className="timeline-box padd-15">
                                                <div className="timeline shadow-dark">
                                                    {/* Timeline-item start */}
                                                    <div className="timeline-item">
                                                            <div className="circle-dot"></div>
                                                            <h6 className="timeline-date">
                                                                <i className="fa fa-calendar"></i>September 2019 - Present
                                                            </h6>
                                                            <h4 className="timeline-title">
                                                                Civil Machines Technologies Pvt. Ltd.
                                                            </h4>
                                                            <p className="timeline-text">
                                                                - Currently Working as a Customer Success Intern <br/>
                                                                - Communication with customers via phone or email and to provode high-quality support and resolution to their issues is one of my daily tasks.
                                                            </p>
                                                    </div>
                                                    {/* Timeline-item end */}
                                                    {/* Timeline-item start */}
                                                    <div className="timeline-item">
                                                            <div className="circle-dot"></div>
                                                            <h6 className="timeline-date">
                                                                <i className="fa fa-calendar"></i> June 2019 - July 2019
                                                            </h6>
                                                            <h4 className="timeline-title">
                                                                Bolt : IoT Platform
                                                            </h4>
                                                            <p className="timeline-text">
                                                                - Worked as a Social Media Marketing Intern <br/>
                                                                - My main work was to make posters and strategise how to increase the reach of the product to a broader public socially.
                                                            </p>
                                                    </div>
                                                    {/* Timeline-item end */}
                                                </div>
                                            </div>
                                    </div>
                                    </div>
                                    <div className="education padd-15">
                                        <h3 className="title">
                                        Education
                                        </h3>
                                        <div className="row">
                                            <div className="timeline-box padd-15">
                                                <div className="timeline shadow-dark">
                                                    {/* Timeline-item start */}
                                                    <div className="timeline-item">
                                                            <div className="circle-dot"></div>
                                                            <h6 className="timeline-date">
                                                                <i className="fa fa-calendar"></i> 2016 - 2020
                                                            </h6>
                                                            <h4 className="timeline-title">
                                                                Bachelors in Electronics and Communication
                                                            </h4>
                                                            <p className="timeline-text">
                                                                Noida Institue of Engineering and Technology, Greater Noida, Uttar Pradesh
                                                            </p>
                                                    </div>
                                                    {/* Timeline-item end */}
                                                    {/* Timeline-item start */}
                                                    <div className="timeline-item">
                                                            <div className="circle-dot"></div>
                                                            <h6 className="timeline-date">
                                                                <i className="fa fa-calendar"></i> 2009 - 2014
                                                            </h6>
                                                            <h4 className="timeline-title">
                                                                Senior Secondary Education(XI-XII)
                                                            </h4>
                                                            <p className="timeline-text">
                                                                Assisi Convent Senior Secondary School, Noida, Uttar Pradesh
                                                            </p>
                                                    </div>
                                                    {/* Timeline-item end */}
                                                    {/* Timeline-item start */}
                                                    <div className="timeline-item">
                                                            <div className="circle-dot"></div>
                                                            <h6 className="timeline-date">
                                                                <i className="fa fa-calendar"></i> 2008 - 2009
                                                            </h6>
                                                            <h4 className="timeline-title">
                                                                Secondary Education(X)
                                                            </h4>
                                                            <p className="timeline-text">
                                                                Assisi Convent Senior Secondary School, Noida, Uttar Pradesh
                                                            </p>
                                                    </div>
                                                    {/* Timeline-item end */}
                                                </div>
                                            </div>
                                    </div>

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
