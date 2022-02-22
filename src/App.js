import React, { useState, useEffect } from 'react';
import './App.css';
import HeroSectionBody from './Components/Pages/HeroSection/HeroSectionBody';
import SocialLinks from './Components/Pages/SocialLinks/SocialLinks';
import ContactMePage from './Components/Pages/Contact/ContactMePage';
import SideNavLink from './Components/Pages/SideNavBar/SideNavLink';
import Skills from './Components/Pages/Skills/Skills'
import About from './Components/Pages/About/About'
import AOS from 'aos';
import Intro from './Components/Pages/IntroPage/Intro';


function App() {
  AOS.init({
    duration: 1200
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  })


  const [contactPage, setcontactPage] = useState(false)
  let bodyDivStyle = {}

  if (contactPage) {
    bodyDivStyle = {
      filter: "blur(3px)",
      pointerEvents: "none",
      userSelect: "none",
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
      <Intro />
      <Skills />
      <About />
    </>
  )
}

export default App;