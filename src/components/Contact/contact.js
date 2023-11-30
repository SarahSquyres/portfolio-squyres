import React, { useRef } from 'react';
import './contact.css';
import GithubIcon from "../../assets/github-icon.png"
import TwitterIcon from "../../assets/twitter.png"
import LinkedinIcon from "../../assets/linkedin.png"
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jvjapvn', 'template_qfyyu8g', form.current, '0_MRd4Y2uSEqIyCSK')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert("Thanks for your email! I check them daily, I will get back to you soon!")
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className="contactDesc">
                    Please fill out the form if you have any questions!
                </span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder="What's your name?" name="from_name" required />
                    <input type='email' className='email' placeholder='Please provide your email.' name="from_email" required />
                    <textarea className='msg' name="message" rows="5" placeholder='Your message...' required ></textarea>
                    <button type="submit" value="Send" className="submitBtn">Submit</button>
                    <div className='links'>
                        <a href="https://github.com/SarahSquyres" target="_blank">
                        <img src={GithubIcon} alt="Github" className='link' />
                        </a>
                        <a href="https://twitter.com/dizziedukes" target="_blank">
                        <img src={TwitterIcon} alt="Twitter" className='link' />
                        </a>
                        <a href="https://www.linkedin.com/in/sarah-squyres/" target="_blank">
                        <img src={LinkedinIcon} alt="Linkedin" className='link' />
                        </a>

                    </div>
                </form>
            </div>
        </section>

    )
}

export default Contact