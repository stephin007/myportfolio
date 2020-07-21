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
                                        <p>Hi, I am Stephin T Reji. I am an aspiring customer success manager with a vision to develop sustainable strategies aimed at solving customer problems with least resources and maximum output.<br/>
                                        I am currently working as a customer success intern with the responsibility to maintain constant communication with the company's clients to provide high quality support and problem resolution.
                                        I am also equipped to provide beneficial recommendations and advice to clients.<br/>
                                        Developing monthly client status reports is another of my expertise in the company. <br/>
                                        As an employee, I am highly detail-oriented and result-driven. My vision is to improve the quality and efficiency of customer service in the company I work in.
                                        I have efficient problem solving skills especially in high pressure situations.
                                        I am a team player with the ability to maintain effective communication between my clients and technology and other buisness lines at the company.</p>
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
                                                <p>Email : <span><a href="mailto: mail@stephinreji.me">mail@stephinreji.me</a></span></p>
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
                                            <h3 className="pi-title padd-15">
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
                                            <h3 className="pi-title padd-15">
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
                                            <h3 className="pi-title padd-15">
                                                Languages/Tools/Libraries
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
                                                <h5>HTML/CSS</h5>
                                                <div className="progress">
                                                    <div className="progress-in" style= {{width: "80%"}}></div>
                                                    <div className="skill-percent">80%</div>
                                                </div>
                                            </div>
                                            <div className="skill-item padd-15">
                                                <h5>GitHub</h5>
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
                                                                <span>Job Title: Customer Success Intern</span><br/>
                                                                <div className="underline"> Work Responsibility</div><br/>
                                                                - Currently Working as a Customer Success Intern <br/>
                                                                - Communication with customers via phone or email and to provide high-quality support and resolution to their issues is one of my daily tasks.
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
                                                            <span>Job Title: Social Media Marketing Intern</span><br/>
                                                            <div className="underline"> Work Responsibility</div><br/>
                                                                - Worked as a Social Media Marketing Intern.<br/>
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
                                                                <i className="fa fa-calendar"></i> 2014 - 2016
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
                                                                <i className="fa fa-calendar"></i> 2013 - 2014
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
