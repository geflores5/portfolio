import React from 'react';
import remember from '../images/remember-when.png';
import blog from '../images/gatsby-blog.png';
import gitcat from '../images/github.png';
import projectsStyles from './projects.module.scss'

const Projects = () => {
    return (
        <div className={projectsStyles.container}>
            <h1>Projects</h1>
            <div className={projectsStyles.row}>
                <div className={projectsStyles.project}>
                    <a href="https://remember-when-5gyebb.web.app" target="_blank">
                        <img src={remember} alt="Remember When" />
                    </a>
                    <p>Built with React, Redux, Firebase Auth/DB/Hosting</p>
                    <a href="https://github.com/geflores5/remember-when" target="_blank">
                        <img src={gitcat} alt="geflores5"/>
                    </a>
                </div>
                <div className={projectsStyles.project}>
                    <a href="https://geflores5-gatsby-blog.netlify.com/" target="_blank">
                        <img src={blog} alt="Gatsby Blog" />
                    </a>
                    <p>Built with React, Gatsby, Contentful, Netlify</p>
                    <a href="https://github.com/geflores5/gatsby-blog" target="_blank">
                        <img src={gitcat} alt="geflores5"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;