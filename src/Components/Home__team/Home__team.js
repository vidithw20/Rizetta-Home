import React from "react";
import "./Home__team.scss";

function Hometeam() {
  return (
    <div className="home__team">
      <div className="home__team__container">
        <div className="home__team__container__box">
          <div className="home__team__container__title">
            <p>Our Team</p>
          </div>
          <div className="home__team__container__description">
            <p>
              We are developing thisapp by focusing on the people who have
              enthusiasm for cooking. First users need to create an account in
              Rizetta and then they can log in to their profiles by providing
              their email address and password. After that, they will be able to
              post novel recipes in their account and also to update and delete
              recipes.
            </p>
          </div>
          <div className="home__team__container__members">
            <div className="home__team__container__member">
              <div className="home__team__container__member__image">
                <img src="./Images/pp.jpg" alt="member" />
              </div>
              <div className="home__team__container__member__name">
                <p>Naveen liyanage</p>
              </div>
            </div>
            <div className="home__team__container__member">
              <div className="home__team__container__member__image">
                <img src="./Images/pp.jpg" alt="member" />
              </div>
              <div className="home__team__container__member__name">
                <p>Naveen liyanage</p>
              </div>
            </div>
            <div className="home__team__container__member">
              <div className="home__team__container__member__image">
                <img src="./Images/pp.jpg" alt="member" />
              </div>
              <div className="home__team__container__member__name">
                <p>Naveen liyanage</p>
              </div>
            </div>
            <div className="home__team__container__member">
              <div className="home__team__container__member__image">
                <img src="./Images/pp.jpg" alt="member" />
              </div>
              <div className="home__team__container__member__name">
                <p>Naveen liyanage</p>
              </div>
            </div>
            <div className="home__team__container__member">
              <div className="home__team__container__member__image">
                <img src="./Images/pp.jpg" alt="member" />
              </div>
              <div className="home__team__container__member__name">
                <p>Naveen liyanage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hometeam;
