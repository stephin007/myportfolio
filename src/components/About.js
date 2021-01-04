import React, { Component } from "react";
import AboutData from "../data/AboutData";

import "../css/about.css";

class About extends Component {
  render() {
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
                  <h3>
                    Communication is the <span>key</span>
                  </h3>
                  <p>{AboutData.aboutTxt}</p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <h3 className="pi-title">Personal Information</h3>
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Birthday :{" "}
                        <span>{AboutData.personalInformation.birthday}</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Age : <span>{AboutData.personalInformation.age}</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email :{" "}
                        <span>
                          <a href="mailto:{AboutData.personalInformation.email}">
                            {AboutData.personalInformation.email}
                          </a>
                        </span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree :{" "}
                        <span>{AboutData.personalInformation.degree}</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone :{" "}
                        <span>
                          <a href="tel:+91 8920 788 383">
                            {AboutData.personalInformation.phone}
                          </a>
                        </span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>{AboutData.personalInformation.city}</span>
                      </p>
                    </div>
                    <div className="info-item padd-15" id="language">
                      <p>
                        Languages Known :{" "}
                        <span>
                          {AboutData.personalInformation.languages.map(
                            (language) => language + ", "
                          )}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href={require("../assets/resume.pdf")}
                        download="Stephin's Resume"
                        className="bn"
                        target="_blank"
                        rel="noopener noreferrer" 
                      >
                        Download Resume
                      </a>
                      <a
                        href={require("../assets/resume.pdf")}
                        className="bn"
                        target="_blank"
                        rel="noopener noreferrer" 
                      >
                        View Resume
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <h3 className="pi-title padd-15">Interpersonal Skills</h3>
                    <div className="skill-item padd-15">
                      <h5>Communication</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{
                            width: `${AboutData.interpersonalSkills.communication}%`,
                          }}
                        ></div>
                        <div className="skill-percent">
                          {AboutData.interpersonalSkills.communication}%
                        </div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Customer Service Skills</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{
                            width: `${AboutData.interpersonalSkills.customerServiceSkills}%`,
                          }}
                        ></div>
                        <div className="skill-percent">
                          {AboutData.interpersonalSkills.customerServiceSkills}%
                        </div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Team Work</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{
                            width: `${AboutData.interpersonalSkills.teamWork}%`,
                          }}
                        ></div>
                        <div className="skill-percent">
                          {AboutData.interpersonalSkills.teamWork}%
                        </div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Attention to Detail</h5>
                      <div className="progress">
                        <div
                          className="progress-in"
                          style={{
                            width: `${AboutData.interpersonalSkills.attentionToDetail}%`,
                          }}
                        ></div>
                        <div className="skill-percent">
                          {AboutData.interpersonalSkills.attentionToDetail}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15" id="computerskills">
                  <div className="row">
                    <h3 className="pi-title padd-15">Computer Skills</h3>
                    {AboutData.computerSkillIDs.map((id) => (
                      <div className="skill-item padd-15">
                        <h5>{id}</h5>
                        <div className="progress">
                          <div
                            className="progress-in"
                            style={{
                              width: `${AboutData.computerSkills[id]}%`,
                            }}
                          ></div>
                          <div className="skill-percent">
                            {AboutData.computerSkills[id]}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="skills padd-15" id="tools">
                  <div className="row">
                    <h3 className="pi-title padd-15">
                      Languages/Tools/Libraries
                    </h3>
                    {AboutData.languageSkillIDs.map((id) => (
                      <div className="skill-item padd-15">
                        <h5>{id}</h5>
                        <div className="progress">
                          <div
                            className="progress-in"
                            style={{
                              width: `${AboutData.languageSkills[id]}%`,
                            }}
                          ></div>
                          <div className="skill-percent">
                            {AboutData.languageSkills[id]}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="experience padd-15">
                  <h3 className="title">Work Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {AboutData.workExperienceIDs.map((id) => (
                          <div className="timeline-item">
                            <div className="circle-dot" />
                            <h6 className="timeline-date">
                              <i className="fa fa-calendar"></i>
                              {AboutData.workExperience[id].timeline}
                            </h6>
                            <h4 className="timeline-title">
                              {AboutData.workExperience[id].company}
                              <a
                                href={AboutData.workExperience[id].website}
                                className="company-website"
                              >
                                <i class="fab fa-chrome"></i>
                              </a>
                            </h4>
                            <p className="timeline-text">
                              <span>
                                Job Title:{" "}
                                {AboutData.workExperience[id].jobTitle}
                              </span>{" "}
                              <br />
                              <div className="underline">
                                {/* {" "} */}
                                Work Responsibility
                              </div>
                              <br />
                              {AboutData.workExperience[id].responsibilities !==
                              "" ? (
                                <>
                                  {AboutData.workExperience[
                                    id
                                  ].responsibilities.map((responsibility) => (
                                    <>
                                      - {responsibility}
                                      <br />
                                    </>
                                  ))}
                                </>
                              ) : (
                                <h2
                                  style={{
                                    textAlign: "center",
                                    padding: "40px",
                                    marginBottom: "-40px",
                                    color: "lightgrey",
                                  }}
                                >
                                  To be Added
                                </h2>
                              )}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="education padd-15">
                  <h3 className="title" data-testid="section--eductaion">
                    Education
                  </h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline-item start */}
                        {AboutData.educationIDs.map((id) => (
                          <div className="timeline-item">
                            <div className="circle-dot" />
                            <h6 className="timeline-date">
                              <i className="fa fa-calendar"></i>{" "}
                              {AboutData.education[id].timeline}
                            </h6>
                            <h4 className="timeline-title">
                              {AboutData.education[id].title}
                            </h4>
                            <p className="timeline-text">
                              {AboutData.education[id].institute}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
