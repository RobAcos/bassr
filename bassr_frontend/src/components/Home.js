import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="home-banner">
        <div className="play-button">
          <img
            className="logo"
            src="http://arcos-platform.site/wp-content/uploads/2021/03/logo1.png"
            alt=""
          ></img>
          <div className="banner-text">
            <a href="http://localhost:3001/login">
              <div class="gradient-button gradient-button-1">Player</div>
            </a>
          </div>
        </div>
      </div>
      <div className="home-banner2"></div>
    </div>
  );
}

export default Home;
