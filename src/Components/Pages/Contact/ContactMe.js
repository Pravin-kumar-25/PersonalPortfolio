import React from 'react';
import { BsChatSquare } from "react-icons/bs";

const ContactMe = ({ setcontactPage }) => {
    return (
        <button className='glitch-btn' onClick={() => setcontactPage(true)}>
            <BsChatSquare color='white' />
            <span>CONTACT ME</span>
        </button>
    )
};

export default ContactMe;

//BsChatSquare