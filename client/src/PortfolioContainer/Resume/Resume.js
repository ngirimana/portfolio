import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Java", ratingPercentage: 60 },
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "TypeScript", ratingPercentage: 70 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 65 },
    { skill: "Express JS", ratingPercentage: 80 },
    { skill: "Node JS", ratingPercentage: 85 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "PostgreSQL", ratingPercentage: 75 },
    { skill: "Material-Ui", ratingPercentage: 70 },
  ];

  const projectsDetails = [
    {
      title: "Inosio portal",
      duration: { fromDate: " Oct 2021", toDate: "Mar 2022" },
      description:
        "Inosio is a Property Management Operations platform that facilitates efficiency and flexibility.",
      subHeading: "Technologies Used: React TS, Material-ui,Redux-toolkit",
    },
    // {
    //   title: "Personal Portfolio Website",
    //   duration: { fromDate: " Jan 2022", toDate: "Mar 2022" },
    //   description:
    //     "A Personal Portfolio website to showcase all my details and projects at one place.",
    //   subHeading: "Technologies Used: React JS, Bootsrap",
    // },
    {
      title: "Shop-it ",
      duration: { fromDate: "Jun 2021", toDate: " Aug 2021" },
      description:
        "Online ecommerce website for showcasing and selling products online with payment system integration, both Paypal and Stripe",
      subHeading:
        "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
    },
    {
      title: "Digpads ",
      duration: { fromDate: "Apr 2021", toDate: " Jun 2021" },
      description:
        "Digpads is an digital platform dedicated to the needs of independent landlords, providing free and paid resources for landlords including advice and How To articles, a Landlord Forum for collaborating with local landlords, rental industry-focused calculators, and property management tools.",
      subHeading:
        "Technologies Used: MongoDB, EpressJs, ReactJs, NodeJS, ContextAPI, Material-ui,styled-components.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      {/* <ResumeHeading
        heading={"Carnegie Mellon University Africa, Rwanda"}
        subHeading={"MASTERS OF ENGINEERING IN ARTIFICIAL INTELLIGENCE"}
        fromDate={"2022"}
        toDate={"2024"}
      /> */}
      <ResumeHeading
        heading={"University of Rwanda, Rwanda"}
        subHeading={"BACHELOR OF SCIENCE IN COMPUTER ENGINEERING"}
        fromDate={"2017"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"E.S.St JOSEPH KARUGANDA, Gakenke,Rwanda"}
        subHeading={
          "ADVANCE LEVEL SECONDARY SCHOOL, MCE(Mathematics-Computer Science-Economics)"
        }
        fromDate={"2014"}
        toDate={"2016"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"FREELANCER"}
          subHeading={"FULL STACK ENGINEER"}
          fromDate={"Jun 2021"}
          toDate={"Present"}
        />
        {/* <div className="experience-description">
          <span className="resume-description-text">
            Currently working as MERN stack web and mobile developer and also an
            online instructor on udemy.
          </span>
        </div> */}
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"KURANGA DIGITAL LTD"}
          subHeading={"FULL STACK ENGINEER"}
          fromDate={"Jan 2020"}
          toDate={"Oct 2021"}
        />
        {/* <div className="experience-description">
          <span className="resume-description-text">
            Currently working as MERN stack web and mobile developer and also an
            online instructor on udemy.
          </span>
        </div> */}
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"SOMA TECHNOLOGIES"}
          subHeading={"SOFTWARE ENGINEER INTERN"}
          fromDate={"Aug 2020"}
          toDate={"Jun 2021"}
        />
        {/* <div className="experience-description">
          <span className="resume-description-text">
            Currently working as MERN stack web and mobile developer and also an
            online instructor on udemy.
          </span>
        </div> */}
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"HazaTech"}
          subHeading={"SOFTWARE ENGINEER INTERN"}
          fromDate={"Jan 2019"}
          toDate={"Jan 2020"}
        />
        {/* <div className="experience-description">
          <span className="resume-description-text">
            Currently working as MERN stack web and mobile developer and also an
            online instructor on udemy.
          </span>
        </div> */}
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through classic songs charts is at times the best stress reliever that i can get my hands on."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
