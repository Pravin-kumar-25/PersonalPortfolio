import React from 'react';
import Header from './Header';
import HomeBody from './HomeBody';
import aos from 'aos';

const HeroSectionBody = ({ setcontactPage }) => {
    aos.init()
    return (
        <section className='heroSection' id='home'>
            <span className='section-background-heading' data-aos="slide-up">HOME</span>
            <Header />
            <HomeBody setcontactPage={setcontactPage} />
            <div className='waves' data-aos="fade-up" data-aos-delay="500">
                <div className='wave-1'></div>
                <div className='wave-2'></div>
                <div className='wave-3'></div>
            </div>
        </section>
    )
};

export default HeroSectionBody;
