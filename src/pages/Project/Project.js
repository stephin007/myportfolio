import React, { Component, Fragment } from "react";
import ProjectData from "../../data/ProjectData";

import "./project.css";

class Portfolio extends Component {
  render() {
    return (
      <Fragment>
        <section className="portfolio section">
          <div className="container">
            <div className="row">
              <div className="section-title padd-15">
                <h2>Projects</h2>
              </div>
            </div>
            <div className="row">
              {ProjectData.allIDs.map((id, index) => (
                <div
                  className="portfolio-item padd-15"
                  key={index}
                  data-category="web-design"
                  data-testid="portfolio-item"
                >
                  <div className="portfolio-item-inner shadow-dark">
                    <div className="portfolio-img">
                      <img
                        src={ProjectData.byID[id].imgLink}
                        alt="portfolio-img"
                      />
                    </div>
                    <div className="portfolio-info">
                      <h4>{ProjectData.byID[id].title}</h4>
                      <p>{ProjectData.byID[id].description}</p>

                      <div
                        className="icon-github"
                        style={{
                          display:
                            ProjectData.byID[id].gitLink !== ""
                              ? "block"
                              : "none",
                        }}
                      >
                        <a
                          href={ProjectData.byID[id].gitLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                      </div>
                      <div
                        className="icon-search"
                        style={{
                          display:
                            ProjectData.byID[id].projLink !== ""
                              ? "block"
                              : "none",
                        }}
                      >
                        <a
                          href={ProjectData.byID[id].projLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-search"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Portfolio;
