import React, {useState} from 'react';
import NavLink from './NavLink';
import aos from 'aos';

const Header = () => {
    aos.init({
        duration:1000
    })
    const [currentNav, setcurrentNav] = useState("home");
    const changeNavLinkColor = () => {
        if(window.scrollY <= 430) {
            setcurrentNav("home")
        } else if(window.scrollY > 430 && window.scrollY < 1400) {
            setcurrentNav("skills")
        } else if(window.scrollY >= 1400) {
            setcurrentNav("about")
        }
    }
    const homeColor = currentNav==="home" ? "var(--subColor)" : "white";
    const skillColor = currentNav==="skills" ? "var(--subColor)" : "white";
    const aboutColor = currentNav==="about" ? "yellow" : "white";


    window.addEventListener("scroll",changeNavLinkColor);
    
    return (
        <header>
            <div className='header'>
                <div className='header-logo' data-aos="slide-down">
                    <div className='logo-letter'>
                        <span id='shadow-letter'>P</span>
                        <span id='main-letter'>P</span>
                    </div>
                    <div className='logo-letter' >
                        <span id='shadow-letter'>K</span>
                        <span id='main-letter'>K</span>
                    </div>
                </div>
                <div className='nav-links' data-aos="slide-down">
                    <ul>
                        <NavLink heading='home' children={null} color={homeColor}/>
                        <NavLink heading='skills' children={null} color={skillColor}/>
                        <NavLink heading='about' children={null} color={aboutColor}/>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
