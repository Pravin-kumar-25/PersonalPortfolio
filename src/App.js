import React, { useState } from 'react';
import './App.css';
import HeroSectionBody from './Components/Pages/HeroSection/HeroSectionBody';
import SocialLinks from './Components/Pages/SocialLinks/SocialLinks';
import ContactMePage from './Components/Pages/Contact/ContactMePage';

function App() {
  const [contactPage, setcontactPage] = useState(false);

  return (
    <>
      {
        contactPage ? <ContactMePage setcontactPage={setcontactPage} /> : null
      }
      <SocialLinks />
      <HeroSectionBody setcontactPage={setcontactPage} />
    </>
  )
}

export default App;