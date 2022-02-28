import React from 'react'
import './TailPage.css'
import TailSocialLinks from './TailSocialLinks';
import { GrFacebookOption } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import { FaTelegramPlane } from "react-icons/fa";

const TailPage = () => {
  return (
    <section className='tail-section'>
      <div className='tail-content'>
        <div className='contact-address'>
          <div className='sub-contact-address'>
            <h3>Contact</h3>
            <span><span>Phone :</span> +91 88701 88247</span>
            <span><span>Email :</span> pravinkumar3725@gmail.com</span>
          </div>
          <div className='sub-contact-address'>
            <h3>Address</h3>
            <span>Theni, TamilNadu</span>
            <span>India.</span>
          </div>
        </div>
        <div className='contact-address'>
          <div className='sub-contact-address'>
            <h3>Social Links</h3>
            <div className='social'>
              <TailSocialLinks Children={GrFacebookOption} URL="https://www.facebook.com/pravin.kumar25M/" />
              <TailSocialLinks Children={AiFillInstagram} URL="https://www.instagram.com/__p_r_a_v_i_n___/" />
              <TailSocialLinks Children={ImLinkedin2} URL="https://www.linkedin.com/in/pravin-kumar-m-751576203/" />
              <TailSocialLinks Children={FaTelegramPlane} URL="https://web.telegram.org/z/#782006766" />
            </div>
          </div>
        </div>
      </div>
      <div className='with-love'>
        <span>Created with </span>
        <a href='#home'>Get code</a>
      </div>

    </section>
  )
}

export default TailPage