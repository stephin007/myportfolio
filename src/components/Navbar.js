import React,{Fragment, Component} from 'react'
import '../css/navbar.css'

// logo
import logo from '../img/stephinlogo.png'

class Navbar extends Component {
    state = {
        isOpen: false
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen 
        })
    }

    
    
    render(){

        return (
            <Fragment>
                <nav>
                    <div className="logobtn">
                        <div className="logo">
                        <a href="#">
                            <img src={logo} alt=""/>
                        </a>
                        </div>
                        <div className="btn" onClick={this.handleClick}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>


                    <ul className={this.state.isOpen ? 'showNav':'undefined'}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>    
            </Fragment>
        )
    }
}

export default Navbar;