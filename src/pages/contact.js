import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import github from '../images/github-large.png';
import linkedin from '../images/linkedin-large.png';

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1 className="title">Connect with Me</h1>
            <div className="contacts">
                <p>Email: geflores5@gmail.com</p>
                <a href="https://github.com/geflores5" target="_blank" rel="noopener noreferrer" >
                    <img id="github-logo" src={github} alt="geflores5"/>
                </a>
                <a href="https://www.linkedin.com/in/giovanni-flores-e/" target="_blank" rel="noopener noreferrer" >
                    <img id="linkedin-icon" src={linkedin} alt="geflores5"/>
                </a>
            </div>
        </Layout>
    );
}

export default ContactPage;