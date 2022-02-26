import React from 'react'
import './About.css'
import Human from './Human/Human'
import Particles from 'particlesjs'
import aos from 'aos'

const About = () => {
  aos.init({
    once:true
  });

  window.onload = () => {
    Particles.init({
      selector: '.background',
      color: ['#000000', '#FFFFFF', '#000000'],
      connectParticles: true
    });
  }

  return (
    <section className="aboutSection" id="about">
      <span className='section-background-heading' data-aos="slide-up">ABOUT</span>
      <div className='about-section-content'>
        <div className='about-me'>
          <div className='about-heading'>
            <div data-aos="slide-right">
              <span>ABOUT ME...</span>
            </div>
          </div>
          <div className='about-content' data-aos="flip-down">
          I'm a Front-end developer based on India. I create websites with better UI/UX designs. Feel free to <a href='#contact'>contact me.</a>
          </div>
        </div>
        <div className='about-object' data-aos="slide-up">
          {/* <Human /> */}
        </div>
      </div>
      <canvas className='background'></canvas>
    </section>
  )
}

export default About