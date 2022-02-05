import React from 'react';
import { BsChatSquare } from "react-icons/bs";

const ContactMe = ({ setcontactPage }) => {
    return (
        <button className='glitch-btn' onClick={() => setcontactPage(true)} data-aos="fade-right" data-aos-delay="1400">
            <BsChatSquare color='white' />
            <span>CONTACT ME</span>
        </button>
    )
};

export default ContactMe;

//BsChatSquare