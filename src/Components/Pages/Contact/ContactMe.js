import React from 'react';
import { BsChatSquare } from "react-icons/bs";
import aos from 'aos';

const ContactMe = () => {
    aos.init();
    return (
        <div className='contact-btn-div' data-aos="fade-right" data-aos-delay="1200">
             <a href='#contact'>
            <button className='btn' id='button'>
                <BsChatSquare color='black' />
                <span>CONTACT ME</span>
            </button>
            </a>
        </div>
    )
};

export default ContactMe;

//BsChatSquare