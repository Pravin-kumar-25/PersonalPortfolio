import React from 'react';
import "./ContactMePage.css"
import { SiMinutemailer } from "react-icons/si";
import CloseButton from '../CloseButton/CloseButton';

const ContactMePage = ({ setcontactPage }) => {

    const onSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className='contact-me-div'>
            <div className='form-heading'>
                <div> CONTACT ME</div>
                <CloseButton setcontactPage={setcontactPage} />
            </div>
            <form onSubmit={onSubmit} className='contact-me-form'>
                <div id='name-input'>
                    <input />
                </div>
                <div id='email-input'>
                    <input />
                </div>
                <div id='send-message-input'>
                    <input />
                </div>
                <div className='submit'>
                    <button>
                        <SiMinutemailer />
                        SEND
                        <span className='btn-span'></span>
                    </button>
                </div>
            </form>
        </div>
    )
};

export default ContactMePage;

//SiMinutemailer
