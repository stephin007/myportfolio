import React, { useState } from "react";
import { Link } from "react-router-dom";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import "./navbar.css";

const Navbar = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ position: "sticky", top: 0, zIndex: 100 }}>
      <div className="logobtn">
        <div className="logo">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            aria-label="Homepage"
            alt="Homepage"
          >
            <img
              src="https://res.cloudinary.com/stephin/image/upload/v1604631468/portfolio/download_cvd0q0.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="mob">
          <img
            src={theme === "light" ? moon : sun}
            onClick={toggleTheme}
            alt="toggle"
            className="sun-moon-1"
          />
          <button
            aria-label="Main menu"
            className="btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
        </div>
      </div>

      <ul className={isOpen ? "showNav" : "undefined"} data-testid="navbar">
        <li>
          <Link to="/" onClick={() => setIsOpen(false)} alt="home">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsOpen(false)} alt="about">
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setIsOpen(false)} alt="project">
            PROJECTS
          </Link>
        </li>
        <li>
          <a
            href="https://blog.stephinreji.me"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            alt="project"
          >
            BLOG
          </a>
        </li>
        <img
          src={theme === "light" ? moon : sun}
          onClick={toggleTheme}
          alt="toggle"
          className="sun-moon-2"
        />
      </ul>
    </nav>
  );
};

export default Navbar;
