import React from 'react';
import './Skills.css'
import Skill from './Skill';
import frontEnd from '../../Utils/pictures/front-end.png'
import backEnd from '../../Utils/pictures/backend.png'
import database from '../../Utils/pictures/server.png'
import testing from '../../Utils/pictures/exam.png'
import generalSkills from '../../Utils/pictures/skills.png'
import html from '../../Utils/pictures/html.png'
import css from '../../Utils/pictures/css-3.png'
import react from '../../Utils/pictures/react.png'
import java from '../../Utils/pictures/java.png'
import node from '../../Utils/pictures/node-js.png'
import express from '../../Utils/pictures/js.png'
import postgresql from '../../Utils/pictures/postgre.png'
import selenium from '../../Utils/pictures/selenium.png'
import restAssured from '../../Utils/pictures/restassured.png'
import git from '../../Utils/pictures/git.png'
import linux from '../../Utils/pictures/linux.png'
import postman from '../../Utils/pictures/postman-icon.png'
import aos from 'aos';
import Three from '../Threejs/Three';

const Skills = () => {
  aos.init()
  const skillObject = [
    {
      icon: frontEnd,
      skillHeading: "Frontend",
      skills: [{
        icon: html,
        skill: "HTML"
      },
      {
        icon: css,
        skill: "CSS"
      },
      {
        icon: react,
        skill: "React JS"
      }],
    },
    {
      icon: backEnd,
      skillHeading: "Backend",
      skills: [
        {
          icon: java,
          skill: "JAVA"
        },
        {
          icon: node,
          skill: "Node JS"
        },
        {
          icon: express,
          skill: "Express JS"
        }
      ],
    },
    {
      icon: database,
      skillHeading: "Database",
      skills: [
        {
          icon: postgresql,
          skill: "Postgresql"
        }
      ],
    },
    {
      icon: testing,
      skillHeading: "Testing",
      skills: [
        {
          icon: selenium,
          skill: "Selenium"
        },
        {
          icon: restAssured,
          skill: "Rest Assured"
        }
      ],
    },
    {
      icon: generalSkills,
      skillHeading: "General Technology",
      skills: [
        {
          icon: git,
          skill: "Git"
        },
        {
          icon: linux,
          skill: "Linux"
        },
        {
          icon: postman,
          skill: "Postman"
        }
      ],
    },
  ]

  const topSkillsObject = [
    {
      circle:true,
      speed:0.02,
      args:[1,0,2],
      color:"yellow",
      position:[1,1,1]
    },
    {
      circle:false,
      speed:0.01,
      args:[1,1,1],
      color:"orange",
      position:[0,-1,0]
    },
    {
      circle:false,
      speed:0.02,
      args:[1,1,2],
      color:"red",
      position:[2,-3,3]
    },
    {
      circle:false,
      speed:0.015,
      args:[2,3,1],
      color:"hotpink",
      position:[5,0,2]
    }
  ]

  const bottomSkillsObject = [
    {
      circle:true,
      speed:0.02,
      args:[1,0,2],
      color:"violet",
      position:[1,1,1]
    },
    {
      circle:false,
      speed:0.01,
      args:[1,1,1],
      color:"brown",
      position:[0,-1,0]
    },
    {
      circle:true,
      speed:0.015,
      args:[1,0,2],
      color:"orange",
      position:[2,-3,3]
    },
    {
      circle:false,
      speed:0.015,
      args:[1,3,2],
      color:"red",
      position:[4,-1,2]
    }
  ]

  return (
    <section className='skills-section' id='skills'>
      <div className='skills-threejs'>
        <Three directionalColor="blue" 
          fov={70}
          objects={topSkillsObject}
        />
      </div>
      <div className='skills-threejs-bottom'>
        <Three directionalColor="red"
          fov={60}
          objects={bottomSkillsObject}
        />
      </div>
      <span className='section-background-heading' data-aos="slide-up">SKILLS</span>
      <div className='skills-header' data-aos="zoom-in-up" data-aos-anchor-placement="top-center">
        <h1>My skills</h1>
      </div>
      <div className='all-skills'>
        <Skill key={skillObject[0].skillHeading} pngName={skillObject[0].icon} skillHeading={skillObject[0].skillHeading} skills={skillObject[0].skills} delay={200} />
        <Skill key={skillObject[1].skillHeading} pngName={skillObject[1].icon} skillHeading={skillObject[1].skillHeading} skills={skillObject[1].skills} delay={400} />
        <Skill key={skillObject[2].skillHeading} pngName={skillObject[2].icon} skillHeading={skillObject[2].skillHeading} skills={skillObject[2].skills} delay={600} />
        <Skill key={skillObject[3].skillHeading} pngName={skillObject[3].icon} skillHeading={skillObject[3].skillHeading} skills={skillObject[3].skills} delay={800} />
        <Skill key={skillObject[4].skillHeading} pngName={skillObject[4].icon} skillHeading={skillObject[4].skillHeading} skills={skillObject[4].skills} delay={1000} />
      </div>
    </section>
  );
};

export default Skills;