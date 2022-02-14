import React from 'react';
import { BsChatSquare } from "react-icons/bs";
import aos from 'aos';

const ContactMe = ({ setcontactPage }) => {
    aos.init();
    return (
        <div className='contact-btn-div' data-aos="fade-right" data-aos-delay="1200">
            <button className='btn' id='button' onClick={() => setcontactPage(true)}>
                <BsChatSquare color='black' />
                <span>CONTACT ME</span>
            </button>
        </div>
    )
};

export default ContactMe;

//BsChatSquare