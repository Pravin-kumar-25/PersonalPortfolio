import React from 'react';
import aos from 'aos';

const Skill = ({pngName,skillHeading,skills,delay}) => {
    aos.init()
    return (
        <div className='skill-card' data-aos="fade-left" data-aos-delay={delay} data-aos-once="true">
            <div className='main-skill-card'>
            <img src={pngName} alt={skillHeading}/>
            <span>{skillHeading}</span>
            </div>
        </div>
    )
};

export default Skill;
