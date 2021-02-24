import React from 'react'
import aboutStyles from './about.module.scss'
import aboutMe from '../images/aboutMe.png'

const About = () => {
  return (
    <div className={aboutStyles.aboutContainer} id='about' >
      <img src={aboutMe} className={aboutStyles.image} alt='aboutMe' />
      <a className={aboutStyles.link} href='#projects' >Check Out My Work</a>
    </div>
  )
}

export default About