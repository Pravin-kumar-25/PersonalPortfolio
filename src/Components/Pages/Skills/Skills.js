import React from 'react';
import './Skills.css'
import Skill from './Skill';
import frontEnd from '../../Utils/pictures/front-end.png'
import backEnd from '../../Utils/pictures/backend.png'
import database from '../../Utils/pictures/server.png'
import testing from '../../Utils/pictures/exam.png'
import generalSkills from '../../Utils/pictures/skills.png'
import aos from 'aos';

const Skills = () => {
  aos.init()
  const skillObject = [
    {
      icon:frontEnd,
      skillHeading:"Frontend",
      skills:['HTML','CSS','React JS'],
    },
    {
      icon:backEnd,
      skillHeading:"Backend",
      skills:['JAVA','Node JS','Express JS'],
    },
    {
      icon:database,
      skillHeading:"Database",
      skills:['Postgresql'],
    },
    {
      icon:testing,
      skillHeading:"Testing",
      skills:['Selenium','Rest Assured'],
    },
    {
      icon:generalSkills,
      skillHeading:"General Technology",
      skills:['Git','Linux','Postman'],
    },
  ]

  return (
    <section className='skills-section' id='skills'>
        <span className='section-background-heading' data-aos="slide-up">SKILLS</span>
        <div className='all-skills'>
        <Skill key={skillObject[0].skillHeading} pngName={skillObject[0].icon} skillHeading={skillObject[0].skillHeading} skills={skillObject[0].skills} delay={200}/>
        <Skill key={skillObject[1].skillHeading} pngName={skillObject[1].icon} skillHeading={skillObject[1].skillHeading} skills={skillObject[1].skills} delay={400}/>
        <Skill key={skillObject[2].skillHeading} pngName={skillObject[2].icon} skillHeading={skillObject[2].skillHeading} skills={skillObject[2].skills} delay={600}/>
        <Skill key={skillObject[3].skillHeading} pngName={skillObject[3].icon} skillHeading={skillObject[3].skillHeading} skills={skillObject[3].skills} delay={800}/>
        <Skill key={skillObject[4].skillHeading} pngName={skillObject[4].icon} skillHeading={skillObject[4].skillHeading} skills={skillObject[4].skills} delay={1000}/>
        </div>
    </section>
  );
};

export default Skills;