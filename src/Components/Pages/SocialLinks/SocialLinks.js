import React, { useState } from 'react';
import { GrFacebookOption } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import { FaTelegramPlane } from "react-icons/fa";

const SocialLinks = () => {
    const [facebook, setfacebook] = useState(false);
    const [insta, setinsta] = useState(false);
    const [linkedin, setlinkedin] = useState(false);
    const [telegram, settelegram] = useState(false);

    const iconSize = '25px';

    const socialLinkHover = (event) => {
        if (event.target.id === "facebook" || event.target.id === "fb") {
            setfacebook(true)
        } else if (event.target.id === "insta" || event.target.id === "ins") {
            setinsta(true)
        } else if (event.target.id === "linkedin" || event.target.id === "in") {
            setlinkedin(true)
        } else if (event.target.id === 'telegram' || event.target.id === "tl") {
            settelegram(true)
        }
    }

    const onMouseLeave = () => {
        setfacebook(false)
        setinsta(false)
        setlinkedin(false)
        settelegram(false)
    }

    const openInNewTab = (url) => {
        window.open(url, '_blank')
        setfacebook(false)
        setinsta(false)
        setlinkedin(false)
        settelegram(false)
    }

    return (
        <div className='social-links'>
            <div className='social' id='facebook' onMouseOver={socialLinkHover} onMouseLeave={onMouseLeave} onClick={() => openInNewTab('https://www.facebook.com/pravin.kumar25M/')}>
                <div className='social-icon'><GrFacebookOption size={iconSize} color={facebook ? 'black' : 'white'} /></div>
                <div className='social-before' id='fb'></div>
            </div>
            <div className='social' id='insta' onMouseOver={socialLinkHover} onMouseLeave={onMouseLeave} onClick={() => openInNewTab('https://www.instagram.com/__p_r_a_v_i_n___/')}>
                <div className='social-icon'> <AiFillInstagram size={iconSize} color={insta ? 'black' : 'white'} /></div>
                <div className='social-before' id='ins'></div>
            </div>
            <div className='social' id='linkedin' onMouseOver={socialLinkHover} onMouseLeave={onMouseLeave} onClick={() => openInNewTab('https://www.linkedin.com/in/pravin-kumar-m-751576203/')}>
                <div className='social-icon'><ImLinkedin2 size={iconSize} color={linkedin ? 'black' : 'white'} /></div>
                <div className='social-before' id='in'></div>
            </div>
            <div className='social' id='telegram' onMouseOver={socialLinkHover} onMouseLeave={onMouseLeave} onClick={() => openInNewTab('https://web.telegram.org/z/#782006766')}>
                <div className='social-icon'> <FaTelegramPlane size={iconSize} color={telegram ? 'black' : 'white'} /></div>
                <div className='social-before' id='tl'></div>
            </div>
        </div>
    )
};

export default SocialLinks;


//GrFacebookOption
//AiFillInstagram
//ImLinkedin2

//FaTelegramPlane