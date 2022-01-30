import React,{useEffect} from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollServices';
import Animations from '../../utilities/Animations';
import './AboutMe.css';


export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    
    const SCREEN_CONSTANT = {
        description: 'I\’m quality-oriented software development professional. During work, I\'m always an irreplaceable team member. I have experience in building modern web using Node.js and React. In addition to my experience, I have practical knowledge about agile methodology, most used deployment method, unit and integration tests, and using popular tools to connect development teams.',
        highlights: {
            bullets: [
                "Full stack web and mobile development",
                "Interactive Front End as per the design",
                "React and React Native",
                "Redux for State management",
                "Building REST API",
                "Managing database",
                "Postgresql",
                "MongoDB",
                "ORM(Sequelize,Mongoose)",
                "Material UI",
                "NodeJs",
                "TailwindCss",
                // "ReduxToolKit",
                // "Agile methodology",
                // "HTML,CSS,JavaScript"
            ],
            heading:"Here are few Highlights"
   }
    }
    const renderHighlight = () => {
        return (
            SCREEN_CONSTANT.highlights.bullets.map((value, i) => (
                <div className='highlight' key={ i}>
                    <div className='highlight-blob'></div>
                    <span>{ value}</span>
                </div>
            ))
        );
    }
    return (
      <div className="about-me-container screen-container" id={props.id || ""}>
        <div className="about-me-parent">
          <ScreenHeading title={"About Me"} subHeading={"Why choose me?"} />
          <div className="about-me-card">
            <div className="about-me-profile"></div>
            <div className="about-me-details">
              <span className="about-me-description">
                {SCREEN_CONSTANT.description}
              </span>
              <div className="about-me-highlights">
                <div className="highlight-heading">
                  <span>{SCREEN_CONSTANT.highlights.heading}</span>
                </div>
                {renderHighlight()}
              </div>
              <div className="about-me-options">
                <button className="btn primary-btn">
                  {""}
                  Hire Me
                </button>
                <a href="cv.pdf" download="NGIRIMANA Schadrack.pdf">
                  <button className="btn highlighted-btn">
                    {""}
                    Get Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
