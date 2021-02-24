import React from 'react'
import inkrprate from '../images/inkrprate.png'
import related from '../images/related.png'
import remember from '../images/remember-when.png'
import blog from '../images/gatsby-blog.png'
import weather from '../images/weather.png'
import exertracker from '../images/exertracker.png'
import gitcat from '../images/github.png'
import githubFinder from '../images/github-finder.png'
import projectsStyles from './projects.module.scss'

const Projects = () => {
  return (
    <div className={projectsStyles.container}>
      <div className={projectsStyles.row}>
        <div className={projectsStyles.project}>
          <a
            href="https://inkrprate.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={inkrprate} alt="Inkrprate" />
          </a>
          <div>
            <p>MongoDB | Express | React | Node | Context | Firebase</p>
            <ul className={projectsStyles.info}>
              <li>Implemented user authentication using Firebase, allowing users to signup, login, and reset password</li>
              <li>Utilized React’s Context API to allow app wide access to currently logged in user info and the implementation of protected routes and user data</li>
            </ul>
          </div>
        </div>
        <div className={projectsStyles.row} >
          <div className={projectsStyles.project}>
            <a
              href="https://target-related-items.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={related} alt="Related Items" />
            </a>
            <div>
              <p>MongoDB | Express | React | Node | AWS EC2 | Docker</p>
              <ul className={projectsStyles.info}>
                <li>Dynamically renders content allowing users to horizontally scroll through a carousel of related items using raw CSS</li>
                <li>Dockerized and hosted on AWS EC2 instance</li>
              </ul>
              <a
                href="https://github.com/TeamM-V-P/related-items"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gitcat} alt="geflores5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={projectsStyles.row}>
        <div className={projectsStyles.project}>
          <a
            href="https://remember-when-5gyebb.web.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={remember} alt="Remember When" />
          </a>
          <div>
            <p>React | Redux | Firebase Auth/DB/Hosting</p>
            <ul className={projectsStyles.info}>
              <li>Users create timelines and input memories</li>
              <li>Upload images and add description and date</li>
              <li>Sort by date or filter by keyword</li>
              <li>User authentication through email and password</li>
            </ul>
            <a
              href="https://github.com/geflores5/remember-when"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitcat} alt="geflores5" />
            </a>
          </div>
        </div>
      </div>
      <div className={projectsStyles.row} >
        <div className={projectsStyles.project}>
          <div
            className="video"
            style={{
              position: "relative",
              paddingBottom: "56.25%" /* 16:9 */,
              paddingTop: 25,
              height: 0,
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "500px",
                height: "300px",
              }}
              src="https://www.youtube.com/embed/4dxDV7h4p8c"
              frameBorder="0"
              allowFullScreen
              title="remember-when"
            />
          </div>
          <div>
            <p>React Native | Redux | Firebase Auth/DB</p>
            <ul className={projectsStyles.info}>
              <li>React Native app version of site</li>
              <li>Real time connection through Firebase</li>
            </ul>
            <a
              href="https://github.com/geflores5/remember-when-native"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitcat} alt="geflores5" />
            </a>
          </div>
        </div>
      </div>
      <div className={projectsStyles.row}>
        <div className={projectsStyles.project}>
          <a
            href="https://node-weather-geflores5.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={weather} alt="Node Weather App" />
          </a>
          <div>
            <p>Node | Express | DarkSky API | Heroku</p>
            <ul className={projectsStyles.info}>
              <li>Weather app utilizing Node asyncronous programming</li>
              <li>Retrieves data from mapbox.com and darksky.net</li>
            </ul>
            <a
              href="https://github.com/geflores5/node-weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitcat} alt="geflores5" />
            </a>
          </div>
        </div>
      </div>
      <div className={projectsStyles.row} >
        <div className={projectsStyles.project}>
          <a
            href="https://exercise-tracker-geflores5.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={exertracker} alt="Exercise Tracker" />
          </a>
          <div>
            <p>MongoDB | Node | Express | Heroku</p>
            <ul className={projectsStyles.info}>
              <li>Simple Exercise Tracker with crud functionality</li>
              <li>Add users/exercises, update/delete exercises</li>
            </ul>
            <a
              href="https://github.com/geflores5/exertracker-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitcat} alt="geflores5" />
            </a>
          </div>
        </div>
      </div>
      <div className={projectsStyles.row}>
        <div className={projectsStyles.project}>
          <a
            href="https://geflores5-github-finder.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubFinder} alt="Github Finder" />
          </a>
          <div>
            <p>React | GitHub API | Context | Netlify</p>
              <ul className={projectsStyles.info}>
                <li>Simple GitHub profile finder using GitHub API</li>
                <li>Search users by name and view basic profile information</li>
              </ul>
              <a
                href="https://github.com/geflores5/github-finder"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gitcat} alt="geflores5" />
              </a>
          </div>
        </div>
      </div>
      <div className={projectsStyles.row} >
        <div className={projectsStyles.project}>
          <a
            href="https://geflores5-gatsby-blog.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={blog} alt="Gatsby Blog" />
          </a>
          <div>
            <p>React | Gatsby | Contentful | Netlify</p>
            <ul className={projectsStyles.info}>
              <li>Blog with content managed using Contentful</li>
              <li>Disqus commenting enabled</li>
            </ul>
            <a
              href="https://github.com/geflores5/gatsby-blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitcat} alt="geflores5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
