import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from "../../assets/contact.png"
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-130} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-130} duration={500} className="desktopMenuListItem">About Me</Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-130} duration={500} className="desktopMenuListItem">Projects</Link>
                <a href="https://docs.google.com/document/d/1slnc_n_TwWkBfXKuMqa2URlB_ryS5oELPeSZqCF9V3A/edit?usp=sharing" target='_blank'>
                <span className="desktopMenuListItem">Resume</span>
                </a>
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById("contact").scrollIntoView({behavior: 'smooth'});
            }}  >
                <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me
            </button>
        </nav>
    )
}

export default Navbar