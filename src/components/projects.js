import React from 'react';
import remember from '../images/remember-when.png';
import blog from '../images/gatsby-blog.png';
import gitcat from '../images/github.png';
import projectsStyles from './projects.module.scss'

const Projects = () => {
    return (
        <div>
            <div className={projectsStyles.row}>
                <div className={projectsStyles.project}>
                    <a href="https://remember-when-5gyebb.web.app" target="_blank" rel="noopener noreferrer">
                        <img src={remember} alt="Remember When" />
                    </a>
                    <p>Built with React, Redux, Firebase Auth/DB/Hosting</p>
                    <ul className={projectsStyles.info}>
                        <li>Users create timelines and input memories</li>
                        <li>Upload images and add description and date</li>
                        <li>Sort by date or filter by keyword</li>
                        <li>User authentication through email and password</li>
                    </ul>
                    <a href="https://github.com/geflores5/remember-when" target="_blank" rel="noopener noreferrer">
                        <img src={gitcat} alt="geflores5"/>
                    </a>
                </div>
                <div className={projectsStyles.project}>
                    <div
                        className="video"
                        style={{
                            position: "relative",
                            paddingBottom: "56.25%" /* 16:9 */,
                            paddingTop: 25,
                            height: 0
                        }}
                    >
                        <iframe
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%"
                            }}
                            src='https://www.youtube.com/embed/4dxDV7h4p8c'
                            frameBorder="0"
                            allowFullScreen
                            title='remember-when'
                        />
                    </div>
                    <p>Built with React Native, Redux, Firebase Auth/DB</p>
                    <ul className={projectsStyles.info}>
                        <li>React Native app version of site</li>
                        <li>Real time connection through Firebase</li>
                    </ul>
                    <a href="https://github.com/geflores5/remember-when-native" target="_blank" rel="noopener noreferrer">
                        <img src={gitcat} alt="geflores5"/>
                    </a>
                </div>
            </div>
            <div className={projectsStyles.row}>
                <div className={projectsStyles.project}>
                    <a href="https://geflores5-gatsby-blog.netlify.com/" target="_blank" rel="noopener noreferrer">
                        <img src={blog} alt="Gatsby Blog" />
                    </a>
                    <p>Built with React, Gatsby, Contentful, Netlify</p>
                    <ul className={projectsStyles.info}>
                        <li>Blog with content managed using Contentful</li>
                        <li>Disqus commenting enabled</li>
                    </ul>
                    <a href="https://github.com/geflores5/gatsby-blog" target="_blank" rel="noopener noreferrer">
                        <img src={gitcat} alt="geflores5"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;