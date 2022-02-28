import React, { useState, useRef } from 'react';
import "./ContactMePage.css"
import Torus from './Torus';
import emailjs from '@emailjs/browser'
import { SiMinutemailer } from "react-icons/si";

const ContactMePage = () => {
    const form = useRef()

    const [emailSent, setEmailSent] = useState('-200px');

    const onSubmit = (event) => {
        event.preventDefault()
        emailjs.sendForm('service_8b2ugsq', 'template_tia10n5', form.current, '9uxDAsY-T8kASoHlS')
            .then((result) => {
                console.log(result.text);
                setEmailSent('40px');
                setTimeout(() => {
                    setEmailSent('-200px')
                }, 2000)
            }, (error) => {
                console.log(error.text);
            });


        event.target.reset()
    }

    return (
        <section id='contact' className='contact-section'>
            <div className='emailSent' style={{ right: emailSent }}>
                <SiMinutemailer color='green' />
                <span>Email sent successfully</span>
            </div>
            <div className='torus top'>
                <div>
                    <Torus color='red' directionLight='yellow' />

                </div>
                <div>

                    <Torus color='white' directionLight='red' />
                </div>
                <div>

                    <Torus color='orange' directionLight='brown' />
                </div>
            </div>
            <span className='section-background-heading' data-aos="slide-up">CONTACT</span>
            <div className='inner-contact-div'>
                <div className='contact-form'>
                    <div className='form-heading'>
                        <span>
                            PING ME....
                        </span>
                    </div>
                    <form ref={form} onSubmit={onSubmit}>
                        <div>
                            <input placeholder='Name' required name='name' autoComplete='off' />
                        </div>
                        <div>
                            <input placeholder='Email' type='email' required name='email' autoComplete='off' />
                        </div>
                        <div>
                            <textarea placeholder='Message' name='message' required rows='5' autoComplete='off' spellCheck='false'>
                            </textarea>
                        </div>
                        <div className='submit-button'>
                            <button type='submit'>
                                <div className="svg-wrapper-1">
                                    <div className="svg-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <span>Send</span>
                            </button>
                        </div>
                    </form>
                </div>
                <div className='contact-object'>
                    
                </div>
            </div>
            <div className='torus bottom'>
                <div>
                    <Torus color='white' directionLight='red' />

                </div>
                <div>

                    <Torus color='brown' directionLight='black' />
                </div>
                <div>

                    <Torus color='orange' directionLight='yellow' />
                </div>
            </div>
        </section>
    )
};

export default ContactMePage;

//SiMinutemailer
//RiMailAddLine
