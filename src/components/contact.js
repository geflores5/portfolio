import React from 'react';
import github from '../images/github-large.png';
import linkedin from '../images/linkedin-large.png';
import contactStyles from './contact.module.scss';

const Contact = () => {
    return (
        <div className={contactStyles.contactContainer} id='contact' >
            <h1 className={contactStyles.title}>Connect with Me</h1>
            <div className={contactStyles.contacts}>
                <p>Email: geflores5@gmail.com</p>
                <a href="https://github.com/geflores5" target="_blank" rel="noopener noreferrer" >
                    <img className={contactStyles.githubLogo} src={github} alt="geflores5"/>
                </a>
                <a href="https://www.linkedin.com/in/giovanni-flores-e/" target="_blank" rel="noopener noreferrer" >
                    <img className={contactStyles.linkedinIcon} src={linkedin} alt="geflores5"/>
                </a>
            </div>
        </div>
    );
}

export default Contact;