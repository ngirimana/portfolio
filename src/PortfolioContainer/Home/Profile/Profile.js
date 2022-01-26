import React from "react";
import Typical from "react-typical";
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/chadrack.ngirimana/">
                <i className="fa fa-facebook-square"></i>
              </a>

              <a href="https://www.linkedin.com/in/ngirimana-schadrack-650507162/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://twitter.com/ngirimanasafi">
                <i className="fa fa-twitter-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello,I'm{" "}
              <span className="highlighted-text">NGIRIMANA Schadrack</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 🧑‍💻",
                    1500,
                    "Full Stack Dev💻",
                    1500,
                    "MERN Stack Dev ⌨",
                    1500,
                    "PERN Stack Dev 🌐",
                    1500,
                    "React Native Dev 📱",
                    1500,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building application with front and backend operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
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
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
