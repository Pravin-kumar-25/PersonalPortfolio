import React,{useState} from 'react';
import aos from 'aos';

const Skill = ({pngName,skillHeading,skills,delay}) => {
    const temp = delay;
    const [isDelay, setIsDelay] = useState(true)
    if(isDelay) {
        delay = temp;
    } else {
        delay = 0;
    }
    aos.init()
    return (
        <div className='skill-card' data-aos="fade-left" data-aos-delay={delay} data-aos-once="true"
        onMouseEnter={()=> setIsDelay(false)} onMouseLeave={()=>setIsDelay(true)}
        >
            <div className='main-skill-card'>
            <img src={pngName} alt={skillHeading}/>
            <span>{skillHeading}</span>
            </div>
        </div>
    )
};

export default Skill;
