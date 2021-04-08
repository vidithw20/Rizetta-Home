import React from "react";
import {
  FaPlusCircle,
  FaSearch,
  FaStar,
  FaRegShareSquare,
} from "react-icons/fa";
import "./Home__blocks.scss";
function Homeblocks() {
  return (
    <div className="home__blocks">
      <div className="home__block1">
        <div className="home__block__bg">
          <div className="home__block__container">
            <div className="home__block__title">
              <p>CREATE</p>
            </div>
            <div className="home__block__icon">
              <FaPlusCircle className="icon" />
            </div>
            <div className="home__block__content">
              <p>
                You can publish your scrumptious cooking and recipe ideas by
                creating an account in Rizetta
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home__block2">
        <div className="home__block__bg">
          <div className="home__block__container">
            <div className="home__block__title">
              <p>SEARCH</p>
            </div>
            <div className="home__block__icon">
              <FaSearch className="icon" />
            </div>
            <div className="home__block__content">
              <p>
                Discover recipes based on the food you love and the friends you
                follow
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home__block3">
        <div className="home__block__bg">
          <div className="home__block__container">
            <div className="home__block__title">
              <p>RATE</p>
            </div>
            <div className="home__block__icon">
              <FaStar className="icon" />
            </div>
            <div className="home__block__content">
              <p>
                Try out your favourite recipes and give the recipe a star rating
                from 1 to 5
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home__block4">
        <div className="home__block__bg">
          <div className="home__block__container">
            <div className="home__block__title">
              <p>SHARE</p>
            </div>
            <div className="home__block__icon">
              <FaRegShareSquare className="icon" />
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
    </div>
  );
}

export default Homeblocks;
