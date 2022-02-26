import React, { useState, useEffect } from 'react';
import ContactMe from '../Contact/ContactMe';
import aos from 'aos';

const HomeBody = () => {
    aos.init({
        duration: 1200
    })

    const [render, setRender] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setRender(true)
        }, 3000)
    })

    const renderComponent = () => {
        return (
            <>
            <div className='name' data-aos="fade-right">
                        <span className='bounce'>H</span>
                        <span className='bounce'>i</span>
                        <span className='bounce'>,</span> <br />
                        <span className='bounce'>I</span>
                        <span className='bounce'>'</span>
                        <span className='bounce'>m &nbsp;</span>
                        {/* <span> </span> */}
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
                    <div className='sub-heading' data-aos="fade-right" data-aos-delay="800">
                        <span>
                            WEB DEVELOPER
                        </span>
                    </div>
                    <div className='main-detail' data-aos="fade-right" data-aos-delay="1200">
                        <span>
                            I create Websites using react JS
                        </span>
                    </div>
                    <ContactMe />
            </>
        )
    }

    return (
        <div className='main-body'>
            <div className='hero-body'>
                <div className='hero-body-details'>
                    {render ? renderComponent() : null}
                </div>
                <div className='hero-body-image'>
                </div>
            </div>
        </div>
    )
};

export default HomeBody;
