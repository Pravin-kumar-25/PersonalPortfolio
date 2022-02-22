import React, { useState } from 'react';
import aos from 'aos';

const Skill = ({ pngName, skillHeading, skills, delay }) => {
    aos.init({
        duration: "1200"
    })
    const temp = delay;
    const [isDelay, setIsDelay] = useState(true)
    if (isDelay) {
        delay = temp;
    } else {
        delay = 0;
    }

    const innerSkills = () => {
        let innerSkillsArray = [];
        skills.forEach(eachSkill => {
            let div = (
                <div className='each-inner-skill' data-aos='fade-right' key={eachSkill.skill}>
                    <img src={eachSkill.icon} alt={eachSkill.skill} />
                    <span><span>-</span> {eachSkill.skill}</span>
                </div>
            )
            innerSkillsArray.push(div)
        });
        return innerSkillsArray;
    }
    return (
        <div className='skill-card' data-aos="fade-left" data-aos-delay={delay} data-aos-once="true"
            onMouseEnter={() => setIsDelay(false)} onMouseLeave={() => setIsDelay(true)}
        >
            <div className='main-skill-card'>
                <div className='skill-div'>
                    <img src={pngName} alt={skillHeading} />
                    <span>{skillHeading}</span>
                </div>
                <div className='inner-skills'>
                    {innerSkills()}
                </div>
            </div>
        </div>
    )
};

export default Skill;
