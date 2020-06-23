import React from 'react'
import '../css/navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li class="logo">
                    {/* MAIN LOGO STARTS */}
                    <a href="/" class="nav-link">
                        <span class="link-text logo-text">PORTFOLIO</span>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fad"
                            data-icon="angle-double-right"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
                        >
                            <g class="fa-group">
                                <path
                                    fill="currentColor"
                                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                                    class="fa-secondary"
                                ></path>
                                <path
                                    fill="currentColor"
                                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                                    class="fa-primary"
                                ></path>
                            </g>
                        </svg>
                    </a>
                </li>
                {/* MAIN LOGO ENDS */}
                {/* NAV LINK 1ST STARTS */}
                <li class="nav-item">
                    <a href="/" class="nav-link">
                        <i class="fa fa-home nav-icon" aria-hidden="true"></i>
                        <span class="link-text">HOME</span>
                    </a>
                </li>
                {/* NAV LINK 1ST ENDS */}
                {/* NAV LINK 2ND STARTS */}
                <li class="nav-item">
                    <a href="/" class="nav-link">
                        <i class="fa fa-envelope nav-icon" aria-hidden="true"></i>
                        <span class="link-text">CONTACT</span>
                    </a>
                </li>
                {/* NAV LINK 2ND ENDS */}
                {/* NAV LINK 3RD STARTS */}
                <li class="nav-item">
                    <a href="/" class="nav-link">
                        <i class="fa fa-file-code-o nav-icon" aria-hidden="true"></i>
                        <span class="link-text">PROJECTS</span>
                    </a>
                </li>
                {/* NAV LINK 4TH ENDS */}
                <li class="nav-item">
                    <a href="/" class="nav-link">
                        <i class="fa fa-moon-o nav-icon" aria-hidden="true"></i>
                        <span class="link-text"></span>
                    </a>
                </li>
                {/* NAV LINK 4TH ENDS */}
            </ul>
        </nav>
    )
}

export default Navbar;