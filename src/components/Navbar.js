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
                        <Link to="/" onClick={this.closeNav}>
                            <img src="https://res.cloudinary.com/stephin/image/upload/v1604631468/portfolio/download_cvd0q0.png" alt=""/>
                        </Link>
                        </div>
                        <div className="btn" onClick={this.handleClick}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>

                    <ul className={this.state.isOpen ? 'showNav':'undefined'}>
                        <li><Link to='/' onClick={this.closeNav}>HOME</Link></li>
                        <li><Link to='/about' onClick={this.closeNav}>ABOUT</Link></li>
                        <li><Link to='/projects' onClick={this.closeNav}>PROJECTS</Link></li>
                    </ul>
                </nav>
            </Fragment>
        )
    }
}

export default Navbar;
