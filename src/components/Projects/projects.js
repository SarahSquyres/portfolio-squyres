import React from 'react';
import './projects.css';
import Portfolio1 from "../../assets/portfolio-1.png";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";

const Projects = () => {
    return (
        <section id='projects'>
            <h2 className='projectTitle'>Projects</h2>
            <span className='projectDesc'>
                Check out my work!
            </span>
            <div className='projectImgs'>
                <a href="https://codewizard-5cb0dd220207.herokuapp.com/" target="_blank" >
                    <img src={Portfolio1} alt="" className='projectImg' />
                </a>
                <a href="https://github.com/SarahSquyres/GSDone" target="_blank">
                    <img src={Portfolio2} alt="" className='projectImg' />
                </a>
                <a href="https://github.com/SarahSquyres/challenge-13-ecommerce" target="_blank">
                    <img src={Portfolio3} alt="" className='projectImg' />
                </a>
                <a href="https://github.com/SarahSquyres/employee-tracker" target="_blank">
                    <img src={Portfolio4} alt="" className='projectImg' />
                </a>
                <a href="https://github.com/SarahSquyres/note-taker" target="_blank">
                    <img src={Portfolio5} alt="" className='projectImg' />
                </a>
                <a href="https://github.com/SarahSquyres/day-scheduler" target="_blank">
                    <img src={Portfolio6} alt="" className='projectImg' />
                </a>
            </div>
        </section>
    )
}

export default Projects