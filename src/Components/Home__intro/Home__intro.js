import React from "react";
import "./Home__intro.scss";
function Homeintro() {
  return (
    <div className="home__intro">
      <div className="home__intro__container">
        <div className="home__intro__container__box">
          <div className="home__intro__container__title">
            <p>What is Rizetta?</p>
          </div>
          <div className="home__intro__container__content">
            <p>
              Rizetta’is an app where we can share our recipes with people
              around the world. It is very similar to the other social media
              apps that we are using these days.<br></br>
              <br></br>
              In Rizetta people can search the recipe of their favorite food and
              lots of recipes will be displayed which are uploaded from
              different users. So they can choose the recipe that they like a
              lot. If they want to use it later, then they can save it too.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homeintro;
