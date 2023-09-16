import React, { useRef } from 'react';
import './contact.css';
import FacebookIcon from "../../assets/facebook-icon.png"
import TwitterIcon from "../../assets/twitter.png"
import InstagramIcon from "../../assets/instagram.png"
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
                    <input type='text' className='name' placeholder='Your Name' name="from_name" />
                    <input type='email' className='email' placeholder='Email' name="from_email"/>
                    <textarea className='msg' name="message" rows="5" placeholder='Your message here'></textarea>
                    <button type="submit" value="Send" className="submitBtn">Submit</button>
                    <div className='links'>
                        <img src={FacebookIcon} alt="Facebook" className='link' />
                        <img src={TwitterIcon} alt="Twitter" className='link' />
                        <img src={InstagramIcon} alt="Instagram" className='link' />

                    </div>
                </form>
            </div>
        </section>

    )
}

export default Contact