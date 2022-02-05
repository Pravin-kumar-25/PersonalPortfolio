import React, { useState } from 'react';
import './App.css';
import HeroSectionBody from './Components/Pages/HeroSection/HeroSectionBody';
import SocialLinks from './Components/Pages/SocialLinks/SocialLinks';
import ContactMePage from './Components/Pages/Contact/ContactMePage';
import SideNavLink from './Components/Pages/SideNavBar/SideNavLink';
import Skills from './Components/Pages/Skills/Skills'
import AOS from 'aos';


function App() {
  AOS.init({
    duration:1200
  })
  
  const [contactPage, setcontactPage] = useState(false)
  let bodyDivStyle = {}

  if(contactPage) {
     bodyDivStyle = {
      filter:"blur(3px)",
      pointerEvents:"none",
      userSelect:"none",
    }
  }

  return (
    <>
    <SideNavLink />
      {
        contactPage ? <ContactMePage setcontactPage={setcontactPage} /> : null
      }
      <div style={bodyDivStyle}>
      <SocialLinks />
      <HeroSectionBody setcontactPage={setcontactPage} />
      </div>
      <Skills />
    </>
  )
}

export default App;