import React, {Component} from 'react'

import '../css/portfolio.css'

// Portfolio Images
import p1 from '../img/p1.jpg'
import p2 from '../img/p2.jpg'
import p3 from '../img/p3.jpg'
import p4 from '../img/p4.jpg'
import p5 from '../img/p5.jpg'
import p6 from '../img/p6.jpg'


class Portfolio extends Component{
    render(){    
        return (
                <section className="portfolio section">
                    <div className="container">
                        <div className="row">
                            <div className="section-title padd-15">
                                <h2>Portfolio</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="portfolio-filter padd-15">
                                <button type="button" className="active" data-filter="all">All</button>
                                <button type="button" data-filter="web-design">Web Design</button>
                                <button type="button" data-filter="photography">Photography</button>
                                <button type="button" data-filter="wordpress">Wordpress</button>
                            </div>
                        </div>
                        <div className="row">
                            {/* Portfolio Item Starts */}
                            <div className="portfolio-item padd-15" data-category="web-design">
                                <div className="portfolio-item-inner shadow-dark">
                                    <div className="portfolio-img">
                                        <img src={p1} alt="portfolio-img"/>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Web Design</h4>
                                        <div className="icon">
                                            <i className="fa fa-search"></i>
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
                                        <h4>Wordpress</h4>
                                        <div className="icon">
                                            <i className="fa fa-search"></i>
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
                                        <h4>Web Design</h4>
                                        <div className="icon">
                                            <i className="fa fa-search"></i>
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
                                        <h4>Photography</h4>
                                        <div className="icon">
                                            <i className="fa fa-search"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Portfolio Item Ends */}
                            {/* Portfolio Item Starts */}
                            <div className="portfolio-item padd-15" data-category="wordpress">
                                <div className="portfolio-item-inner shadow-dark">
                                    <div className="portfolio-img">
                                        <img src={p5} alt="portfolio-img"/>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Wordpress</h4>
                                        <div className="icon">
                                            <i className="fa fa-search"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Portfolio Item Ends */}
                            {/* Portfolio Item Starts */}
                            <div className="portfolio-item padd-15" data-category="web-design">
                                <div className="portfolio-item-inner shadow-dark">
                                    <div className="portfolio-img">
                                        <img src={p6} alt="portfolio-img"/>
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Web Design</h4>
                                        <div className="icon">
                                            <i className="fa fa-search"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Portfolio Item Ends */}
                        </div>
                    </div>
                </section>
            )
        }    
}

export default Portfolio