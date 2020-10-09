import React, {Component, Fragment} from 'react'
import ProjData from '../data/data_projects.json'

import '../css/project.css'


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
                        {ProjData.map((projInfo, index)=>{
                                return <div>

                            
                        {/* <div className="row">
                            <div className="portfolio-filter padd-15">
                                <button type="button" className="active" data-filter="all">All</button>
                                <button type="button" data-filter="web-design">Web Design</button>
                                <button type="button" data-filter="photography">Photography</button>
                                <button type="button" data-filter="wordpress">Wordpress</button>
                            </div>
                        </div> */}
                        <div className="row">
                            
                            {/* Portfolio Item Starts */}
                            <div className="portfolio-item padd-15" data-category="web-design">
                                <div className="portfolio-item-inner shadow-dark">
                                    <div className="portfolio-img">
                                        <img src={projInfo.image} alt="portfolio-img"/>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>{projInfo.title}</h4>
                                        <p>{projInfo.description}</p>
                                        <div className="icon">
                                        <a href={projInfo.link} target="_blank" rel = "noopener noreferrer"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        })}
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