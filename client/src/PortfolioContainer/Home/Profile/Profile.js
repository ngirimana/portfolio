import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/ngirimana">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/ngirimana-schadrack-650507162/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.facebook.com/chadrack.ngirimana/">
                <i className="fa fa-facebook-square"></i>
              </a>

              <a href="https://twitter.com/ngirimanasafi">
                <i className="fa fa-twitter-square"></i>
              </a>
              <a href="https://www.instagram.com/ngirimana_safari_chadrack/">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M{" "}
              <span className="highlighted-text">NGIRIMANA Schadrack</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😎",
                    1000,
                    "Full stack Developer 💻",
                    1000,
                    "MERN stack Dev 📱",
                    1000,
                    "PERN stack Dev 📱",
                    1000,
                    "Cross Platform Dev 🔴",
                    1000,
                    "React/React Native 🌐",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </div>

          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire Me{" "}
            </button>
            <a href="Schadrack.pdf" download="NGIRIMANA Schadrack.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
