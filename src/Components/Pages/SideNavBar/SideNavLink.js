import React from 'react';
import NavLink from '../HeroSection/NavLink'
import { FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { IoMdContact } from "react-icons/io";

const SideNavLink = () => {
  return (
      <div className='side-nav-div'>
        {/* <ul className='side-ul-list'>
          <NavLink heading='home'>
            <FaHome />
          </NavLink >
          <NavLink heading='skills'>
            <GiSkills />
          </NavLink>
          <NavLink heading='about'>
            <IoMdContact />
          </NavLink>
        </ul> */}
      </div>
  );
};

export default SideNavLink;

//GiSkills
//IoMdContact