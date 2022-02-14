import React, {useState,useEffect} from 'react';
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

    const [render,setRender]= useState(false);

    useEffect(() => {
      setTimeout(()=> {
          setRender(true)
      },3200)
    })
    
    const renderComponent = () => {
        return (
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
        )
    }

    window.addEventListener("scroll",changeNavLinkColor);
    
    return (
        <header>
            {render ? renderComponent() : null}
        </header>
    );
};

export default Header;
