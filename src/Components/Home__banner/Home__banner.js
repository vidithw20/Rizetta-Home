import React from "react";
import "./Home__banner.scss";
function Homebanner() {
  return (
    <div className="home__banner">
      <div className="home__banner__container">
        <div className="home__banner__container__content">
          <div className="home__banner__logo">
            <img
              src="./Images/Rizetta_LOGO.png"
              alt="logo"
              width="501px;"
              height="144px"
            />
          </div>
          <div className="home__banner__slogan">
            <p>Discover The Chef In You</p>
          </div>
          <div className="home__banner__content1">
            <p>
              Want to share your receipes with your friends. What are you
              waiting for?
            </p>
          </div>
          <div className="home__banner__content2">
            <p>Get Started Now</p>
          </div>
          <div className="home__buttons">
            <div className="sign__up">
              <button className="sign__up__button">Sign up</button>
            </div>
            <div className="sign__in">
              <button className="sign__in__button">Sign in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homebanner;
