import React, {Component} from 'react'
import AboutData from '../data/AboutData'

import '../css/about.css'

const workExperience = [
    {
        timeline : 'September 2019 - Present',
        companyName : "Civil Machines technologies Pvt. Ltd.",
        jobTitle : "Customer Success Intern",
        respLine1 : "Currently Working as a Customer Success Intern",
        respLine2 : "Communication with customers via phone or email and to provide high-quality support and resolution to their issues is one of my daily tasks"
    },
]

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
                                        <p>{AboutData.aboutTxt}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="personal-info padd-15">
                                        <h3 className="pi-title">
                                            Personal Information
                                        </h3>
                                        <div className="row">
                                            <div className="info-item padd-15">
                                                <p>Birthday : <span>{AboutData.personalInformation.birthday}</span></p>
                                            </div>
                                            <div className="info-item padd-15">
                                                <p>Age : <span>{AboutData.personalInformation.age}</span></p>
                                            </div>
                                            <div className="info-item padd-15">
                                                <p>Email : <span><a href="mailto: mail@stephinreji.me">{AboutData.email}</a></span></p>
                                            </div>
                                            <div className="info-item padd-15">
                                                <p>Degree : <span>{AboutData.personalInformation.degree}</span></p>
                                            </div>
                                            <div className="info-item padd-15">
                                                <p>Phone : <span><a href="tel:+91 8920 788 383">{AboutData.personalInformation.phone}</a></span></p>
                                            </div>
                                            <div className="info-item padd-15">
                                                <p>City : <span>{AboutData.personalInformation.city}</span></p>
                                            </div>
                                            <div className="info-item padd-15" id="language">
                                                <p>Languages Known : <span>{AboutData.personalInformation.languages.map(language => language + ", ")}</span></p>
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
                                                    <div className="progress-in" style= {{width: `${AboutData.interpersonalSkills.communication}%`}}></div>
                                    <div className="skill-percent">{AboutData.interpersonalSkills.communication}%</div>
                                                </div>
                                            </div>
                                            <div className="skill-item padd-15">
                                                <h5>Customer Service Skills</h5>
                                                <div className="progress">
                                                    <div className="progress-in" style= {{width: `${AboutData.interpersonalSkills.customerServiceSkills}%`}}></div>
                                                    <div className="skill-percent">{AboutData.interpersonalSkills.customerServiceSkills}%</div>
                                                </div>
                                            </div>
                                            <div className="skill-item padd-15">
                                                <h5>Team Work</h5>
                                                <div className="progress">
                                                    <div className="progress-in" style= {{width: `${AboutData.interpersonalSkills.teamWork}%`}}></div>
                                                    <div className="skill-percent">{AboutData.interpersonalSkills.teamWork}%</div>
                                                </div>
                                            </div>
                                            <div className="skill-item padd-15">
                                                <h5>Attention to Detail</h5>
                                                <div className="progress">
                                                    <div className="progress-in" style= {{width: `${AboutData.interpersonalSkills.attentionToDetail}%`}}></div>
                                                    <div className="skill-percent">{AboutData.interpersonalSkills.attentionToDetail}%</div>
                                                </div>
                                            </div>
                                        </div>   
                                    </div>
                                    <div className="skills padd-15" id="computerskills">
                                        <div className="row">
                                            <h3 className="pi-title padd-15">
                                                Computer Skills
                                            </h3>
                                            {
                                                AboutData.computerSkillIDs.map(id => (
                                                    <div className="skill-item padd-15">
                                                        <h5>{id}</h5>
                                                        <div className="progress">
                                                            <div className="progress-in" style= {{width: `${AboutData.computerSkills[id]}%`}}></div>
                                                            <div className="skill-percent">{AboutData.computerSkills[id]}%</div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>   
                                    </div>
                                    <div className="skills padd-15" id="tools">
                                        <div className="row">
                                            <h3 className="pi-title padd-15">
                                                Languages/Tools/Libraries
                                            </h3>
                                            {
                                                AboutData.languageSkillIDs.map(id => (
                                                    <div className="skill-item padd-15">
                                                        <h5>{id}</h5>
                                                        <div className="progress">
                                                            <div className="progress-in" style= {{width: `${AboutData.languageSkills[id]}%`}}></div>
                                                            <div className="skill-percent">{AboutData.languageSkills[id]}%</div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
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
                                                                <i className="fa fa-calendar"></i>
                                                                {workExperience.map(exp => {
                                                                    return <>{exp.timeline}</>
                                                                })}
                                                            </h6>
                                                            <h4 className="timeline-title">
                                                            {workExperience.map(exp => {
                                                                    return <>{exp.companyName}</>
                                                                })}
                                                            </h4>
                                                            <p className="timeline-text">
                                                            {workExperience.map(exp => {
                                                                    return <><span>Job Title: {exp.jobTitle}</span><br/></>
                                                                })}
                                                                
                                                                <div className="underline"> Work Responsibility</div><br/>
                                                                {workExperience.map(exp => {
                                                                    return <>- {exp.respLine1}<br/></>
                                                                })}
                                                                {workExperience.map(exp => {
                                                                    return <>- {exp.respLine2}<br/></>
                                                                })} 
                                                                
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
