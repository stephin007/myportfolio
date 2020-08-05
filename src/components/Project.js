import React, {Component, Fragment} from 'react'

import '../css/project.css'

// Portfolio Images
import p1 from '../img/p1.png'
import p2 from '../img/p2.png'
import p3 from '../img/p3.png'
import p4 from '../img/p4.png'
import p5 from '../img/p5.png'


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
                            {/* Portfolio Item Starts */}
                            <div className="portfolio-item padd-15" data-category="web-design">
                                <div className="portfolio-item-inner shadow-dark">
                                    <div className="portfolio-img">
                                        <img src={p5} alt="portfolio-img"/>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>A Currency Convertor App||Made using ReactJS</h4>
                                        <p>App fetches the currency exchange rates of 33 countries</p>
                                        <div className="icon">
                                        <a href="https://currencyconvertor.stephinreji.me/" target="_blank" rel = "noopener noreferrer"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Portfolio Item Starts */}
                            <div className="portfolio-item padd-15" data-category="web-design">
                                <div className="portfolio-item-inner shadow-dark">
                                    <div className="portfolio-img">
                                        <img src={p1} alt="portfolio-img"/>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>A Weather Application||Made using ReactJS</h4>
                                        <p>It uses an Open Weather API to fetch weather details</p>
                                        <div className="icon">
                                        <a href="https://weatherman.stephinreji.me/" target="_blank" rel = "noopener noreferrer"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Portfolio Item Ends */}
                            {/* Portfolio Item Starts */}
                            <div className="portfolio-item padd-15" data-category="wordpress">
                                <div className="portfolio-item-inner shadow-dark">
                                    <div className="portfolio-img">
                                        <img src={p2} alt="portfolio-img"/>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Photographer's Portfolio||Made using HTML/CSS</h4>
                                        <p>It's a fully customised Photographer portfolio</p>
                                        <div className="icon">
                                        <a href="https://chitrahaar.stephinreji.me/" target="_blank" rel = "noopener noreferrer"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Portfolio Item Ends */}
                            {/* Portfolio Item Starts */}
                            <div className="portfolio-item padd-15" data-category="web-design">
                                <div className="portfolio-item-inner shadow-dark">
                                    <div className="portfolio-img">
                                        <img src={p3} alt="portfolio-img"/>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>PipBoy||Made using Bootstrap</h4>
                                        <p>This is the main screen of a PipBoy from fallout4</p>
                                        <div className="icon">
                                        <a href="https://pipboy.stephinreji.me/" target="_blank" rel = "noopener noreferrer"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Portfolio Item Ends */}
                            {/* Portfolio Item Starts */}
                            <div className="portfolio-item padd-15" data-category="photography">
                                <div className="portfolio-item-inner shadow-dark">
                                    <div className="portfolio-img">
                                        <img src={p4} alt="portfolio-img"/>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Coming Soon||Made Using HTML/CSS</h4>
                                        <p>This is a coming soon page with an active countdown timer</p>
                                        <div className="icon">
                                        <a href="https://timer.stephinreji.me/" target="_blank" rel = "noopener noreferrer"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Portfolio Item Ends */}
                            {/* Portfolio Item Starts */}
                            {/* <div className="portfolio-item padd-15" data-category="wordpress">
                                <div className="portfolio-item-inner shadow-dark">
                                    <div className="portfolio-img">
                                        <img src={p5} alt="portfolio-img"/>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Wordpress</h4>
                                        <div className="icon">
                                        <a href="https://www.google.com" target="_blank" rel = "noopener noreferrer"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* Portfolio Item Ends */}
                            {/* Portfolio Item Starts */}
                            {/* <div className="portfolio-item padd-15" data-category="web-design">
                                <div className="portfolio-item-inner shadow-dark">
                                    <div className="portfolio-img">
                                        <img src={p6} alt="portfolio-img"/>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Web Design</h4>
                                        <div className="icon">
                                            <a href="https://www.google.com" target="_blank" rel = "noopener noreferrer"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* Portfolio Item Ends */}
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