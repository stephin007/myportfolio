import React, {Component, Fragment} from 'react'
import ProjectData from '../data/ProjectData'

import '../css/project.css'

// Portfolio Images


class Portfolio extends Component{
    
    render(){    
        return (
            <Fragment>
                <section className="portfolio section">
                    <div className="container">
                        <div className="row">
                            <div className="section-title padd-15">
                                <h2>Projects</h2>
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="portfolio-filter padd-15">
                                <button type="button" className="active" data-filter="all">All</button>
                                <button type="button" data-filter="web-design">Web Design</button>
                                <button type="button" data-filter="photography">Photography</button>
                                <button type="button" data-filter="wordpress">Wordpress</button>
                            </div>
                        </div> */}
                        <div className="row">
                            {
                                ProjectData.allIDs.map((id, index) => (
                                    <div className="portfolio-item padd-15" key={index} data-category="web-design">
                                        <div className="portfolio-item-inner shadow-dark">
                                            <div className="portfolio-img">
                                                <img src={require(`../img/p${id}.png`)} alt="portfolio-img"/>
                                            </div>
                                            <div className="portfolio-info">
                                                <h4>{ProjectData.byID[id].title}</h4>
                                                <p>{ProjectData.byID[id].description}</p>
                                                <div className="icon">
                                                <a href="https://currencyconvertor.stephinreji.me/" target="_blank" rel = "noopener noreferrer"><i className="fa fa-search"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>

                {/* <div className="lightbox">
                    <div className="lightbox-content">
                        <div className="lightbox-close">&times;</div>
                        <img src={p2} alt="" className="lightbox-img"/>
                        <div className="lightbox-caption">
                            <div className="caption-text">
                                Web Design
                            </div>
                            <div className="caption counter">
                                1 of 6
                            </div>
                        </div>
                    </div>
                    <div className="lightbox-controls">
                        <div className="prev-item">
                            <i className="fa fa-angle-left"></i>
                        </div>
                        <div className="next-item">
                        <i className="fa fa-angle-right"></i>
                        </div>
                    </div>
                </div> */}

            </Fragment>    
            )
        }    
}

export default Portfolio