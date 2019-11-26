import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import gitcat from '../images/github.png';
import styles from '../styles/index.scss';

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1 className="title">Connect with Me</h1>
            <p>Email: geflores5@gmail.com</p>
            <p>
                <a href="https://github.com/geflores5" target="_blank" rel="noopener noreferrer" >
                    <img src={gitcat} alt="geflores5"/>
                </a>
            </p>
        </Layout>
    );
}

export default ContactPage;