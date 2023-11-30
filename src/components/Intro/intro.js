import React from 'react';
import './intro.css';
import bg from "../../assets/image.png";

const Intro = () => {
    return (
        <section id="intro">
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Sarah.</span>
                    <br></br>Software Engineer</span>
                <p className='introPara'>A driven, creative and curious software engineer
                    <br />with a passion for elegant problem-solving and life-long learning.</p>
            </div>
            <img src={bg} alt="Profile" className='bg' />
        </section>
    )
}

export default Intro;
