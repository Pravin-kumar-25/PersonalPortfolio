import React, { useState } from 'react';
import './SideNavLink.css'
// import NavLink from '../HeroSection/NavLink'
import { FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { IoMdContact } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";
import gsap from 'gsap';

const SideNavLink = () => {

  const [showBlock,setshowBlock] = useState(true);
  const onClick = () => {
    setshowBlock(!showBlock)
    console.log(showBlock);
    if(showBlock) {
      gsap.to(".firstSpan",{rotate:405,width:30,y:6})
      gsap.to(".secondSpan",{xPercent:210})
      gsap.to(".thirdSpan",{rotate:495,y:-10,width:30})
      gsap.to(".floating-links",{xPercent:0,left:0})
    } else {
      gsap.to(".firstSpan",{rotate:0,y:0,width:45})
      gsap.to(".secondSpan",{xPercent:0})
      gsap.to(".thirdSpan",{rotate:0,y:0,width:20})
      gsap.to(".floating-links",{xPercent:100})
    }
  }

  return (
    <div className='side-nav-div'>
      <div className='burger-menu'>
        <div className='span-container' onClick={onClick}>
        <span className='firstSpan'></span>
        <span className='secondSpan'></span>
        <span className='thirdSpan'></span>
        </div>
      </div>
      <div className='floating-links' onClick={onClick}>
        <ul>
          <li>
            <a href='#home'> <div className='top-nav'> <FaHome />  &nbsp;HOME</div></a>
          </li>
          <li>
            <a href='#skills'><div><GiSkills />&nbsp; SKILLS</div></a>
          </li>
          <li>
            <a href='#about'><div><IoMdContact /> &nbsp; ABOUT ME</div></a>
          </li>
          <li>
            <a href='#contact'><div className='bottom-nav'><BsTelephoneFill /> &nbsp;CONTACT</div> </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavLink;

//GiSkills
//IoMdContact