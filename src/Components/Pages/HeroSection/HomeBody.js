import React,{useState} from 'react';
import ContactMe from '../Contact/ContactMe';

const HomeBody = () => {
  return (
    <div className='main-body'>
    <div className='hero-body'>
        <div className='hero-body-details'>
            <div className='name'>
                <span className='bounce'>H</span>
                <span className='bounce'>i</span>
                <span className='bounce'>,</span> <br />
                <span className='bounce'>I</span>
                <span className='bounce'>'</span>
                <span className='bounce'>m</span>
                <span> </span>
                <span className='logo-letter body-logo'>

                    <span id='shadow-letter'>P</span>
                    <span id='main-letter'>P</span>
                </span>
                <span className='bounce'>r</span>
                <span className='bounce'>a</span>
                <span className='bounce'>v</span>
                <span className='bounce'>i</span>
                <span className='bounce'>n</span>
                <span className='bounce'>,</span>
            </div>
            <div className='sub-heading'>
                <span>
                    WEB DEVELOPER
                </span>
            </div>
            <div className='main-detail'>
                <span>
                I create Websites using react JS
                    </span> 
            </div>
            <ContactMe />
        </div>
        <div className='hero-body-image'>
        </div>
    </div>
</div>
  )
};

export default HomeBody;
