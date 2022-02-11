import React from 'react';
import { BsChatSquare } from "react-icons/bs";
import aos from 'aos';

const ContactMe = ({ setcontactPage }) => {
    aos.init();
    return (
        <div className='contact-btn-div' data-aos="fade-right" data-aos-delay="1400">

        <button className='btn' id='button' onClick={() => setcontactPage(true)} data-aos="fade-right" data-aos-delay="1400">
            <BsChatSquare color='black' />
            <span>CONTACT ME</span>
        </button>
        </div>
    )
};

export default ContactMe;

//BsChatSquare