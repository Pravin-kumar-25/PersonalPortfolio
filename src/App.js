import React, { useState } from 'react';
import './App.css';
import HeroSectionBody from './Components/Pages/HeroSection/HeroSectionBody';
import SocialLinks from './Components/Pages/SocialLinks/SocialLinks';
import ContactMePage from './Components/Pages/Contact/ContactMePage';

function App() {
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
      {
        contactPage ? <ContactMePage setcontactPage={setcontactPage} /> : null
      }
      <div style={bodyDivStyle}>
      <SocialLinks />
      <HeroSectionBody setcontactPage={setcontactPage} />
      </div>
    </>
  )
}

export default App;