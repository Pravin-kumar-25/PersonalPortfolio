import React, { useState, useEffect } from 'react';
import './App.css';
import HeroSectionBody from './Components/Pages/HeroSection/HeroSectionBody';
import SocialLinks from './Components/Pages/SocialLinks/SocialLinks';
import ContactMePage from './Components/Pages/Contact/ContactMePage';
import SideNavLink from './Components/Pages/SideNavBar/SideNavLink';
import Skills from './Components/Pages/Skills/Skills'
import About from './Components/Pages/About/About'
import TailPage from './Components/Pages/TailPage/TailPage';
import AOS from 'aos';
import Intro from './Components/Pages/IntroPage/Intro';


function App() {
  AOS.init({
    duration: 1200
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <>
      <SideNavLink />
      <div>
        <SocialLinks />
        <HeroSectionBody />
      </div>
      <Intro />
      <Skills />
      <About />
      <ContactMePage />
      <TailPage />
    </>
  )
}

export default App;