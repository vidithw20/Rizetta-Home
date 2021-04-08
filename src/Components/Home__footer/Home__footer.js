import React from "react";
import "./Home__footer.scss";

function Homefooter() {
  return (
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
  );
}

export default Homefooter;
