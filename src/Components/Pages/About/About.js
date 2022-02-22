import React from 'react'
import './About.css'
import Human from './Human/Human'
import Particles from 'particlesjs'

const About = () => {

  window.onload = () => {
    let particles = Particles.init({
      selector: '.background',
      color: ['#000000', '#FFFFFF', '#000000'],
      connectParticles:true
    });
  }
  
  return (
    <section className="aboutSection" id="about">
      <span className='section-background-heading' data-aos="slide-up">ABOUT</span>
      <div className='about-section-content'>
         <div className='about-me'></div>
         <div className='about-object'>
           {/* <Human /> */}
         </div>
      </div>
      <canvas className='background'></canvas>
    </section>
  )
}

export default About