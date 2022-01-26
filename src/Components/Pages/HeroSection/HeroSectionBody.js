import React from 'react';
import Header from './Header';
import HomeBody from './HomeBody';

const HeroSectionBody = ({ setcontactPage }) => {
    return (
        <section className='heroSection'>
            <Header />
            <HomeBody setcontactPage={setcontactPage} />
            <div className='waves'>
                <div className='wave-1'></div>
                <div className='wave-2'></div>
                <div className='wave-3'></div>
            </div>
        </section>
    )
};

export default HeroSectionBody;
