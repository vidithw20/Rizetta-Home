import React from "react";
import {
  FaPlusCircle,
  FaSearch,
  FaStar,
  FaRegShareSquare,
} from "react-icons/fa";
import "./Home.scss";
function Home() {
  return (
    <div className="home">
      <div className="home__banner">
        <div className="home__banner__container">
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
              <br></br> Want to share your receipes with your friends. What are
              you waiting for?
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
      <div className="home__intro">
        <div className="home__intro__container">
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
      <div className="home__blocks">
        <div className="home__block1">
          <div className="home__block__bg">
            <div className="home__block__title">
              <p>CREATE</p>
            </div>
            <div className="home__block__icon">
              <FaPlusCircle
                display="block"
                margin-left="auto"
                margin-right="auto"
                size="10em"
              />
            </div>
            <div className="home__block__content">
              <p>
                You can publish your scrumptious cooking and recipe ideas by
                creating an account in Rizetta
              </p>
            </div>
          </div>
        </div>
        <div className="home__block2">
          <div className="home__block__bg">
            <div className="home__block__title">
              <p>SEARCH</p>
            </div>
            <div className="home__block__icon">
              <FaSearch
                display="block"
                margin-left="auto"
                margin-right="auto"
                size="10em"
              />
            </div>
            <div className="home__block__content">
              <p>
                Discover recipes based on the food you love and the friends you
                follow
              </p>
            </div>
          </div>
        </div>
        <div className="home__block3">
          <div className="home__block__bg">
            <div className="home__block__title">
              <p>RATE</p>
            </div>
            <div className="home__block__icon">
              <FaStar
                display="block"
                margin-left="auto"
                margin-right="auto"
                size="10em"
              />
            </div>
            <div className="home__block__content">
              <p>
                Try out your favourite recipes and give the recipe a star rating
                from 1 to 5
              </p>
            </div>
          </div>
        </div>
        <div className="home__block4">
          <div className="home__block__bg">
            <div className="home__block__title">
              <p>SHARE</p>
            </div>
            <div className="home__block__icon">
              <FaRegShareSquare
                display="block"
                margin-left="auto"
                margin-right="auto"
                size="10em"
              />
            </div>
            <div className="home__block__content">
              <p>
                You can share other users’ ideas with your friends and save
                delicious recipes
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home__team">
        <div className="home__team__container">
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
      <div className="home__footer">
        <div className="home__footer__logo">
          <img
            src="./Images/Rizetta_LOGO_white.png"
            alt="logo"
            width="501px;"
            height="144px"
          />
        </div>
        <div className="home__footer__text">
          <p>Copyright © 2021 Rizetta. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
