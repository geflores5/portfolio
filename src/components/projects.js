import React from 'react';
import remember from "../images/remember-when.png";
import blog from "../images/gatsby-blog.png";
import projectsStyles from './projects.module.scss'

const Projects = () => {
    return (
        <div className={projectsStyles.container}>
            <h1>Projects</h1>
            <div className={projectsStyles.row}>
                <div className={projectsStyles.project}>
                    <a href="https://remember-when-5gyebb.web.app">
                        <img src={remember} alt="Remember When" />
                    </a>
                </div>
                <div className={projectsStyles.project}>
                    <a href="https://geflores5-gatsby-blog.netlify.com/">
                        <img src={blog} alt="Gatsby Blog" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;