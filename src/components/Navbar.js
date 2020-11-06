import React,{Fragment, Component} from 'react'
import {Link} from 'react-router-dom'

import '../css/navbar.css'

class Navbar extends Component {
    state = {
        isOpen: false
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    closeNav = () => {
        this.setState({
            isOpen: false
        })
    }

    render(){

        return (
            <Fragment>
                <nav>
                    <div className="logobtn">
                        <div className="logo">
                            <Link to="/" onClick={this.closeNav} aria-label="Homepage" alt="Homepage">
                                <img src="https://res.cloudinary.com/stephin/image/upload/v1604631468/portfolio/download_cvd0q0.png" alt="logo"/>
                            </Link>
                        </div>
                        <button aria-label="Main menu" className="btn" onClick={this.handleClick}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </button>
                    </div>

                    <ul className={this.state.isOpen ? 'showNav':'undefined'} data-testid="navbar">
                        <li><Link to='/' onClick={this.closeNav} alt="home">HOME</Link></li>
                        <li><Link to='/about' onClick={this.closeNav} alt="about">ABOUT</Link></li>
                        <li><Link to='/projects' onClick={this.closeNav} alt="project">PROJECTS</Link></li>
                    </ul>
                </nav>
            </Fragment>
        )
    }
}

export default Navbar;
