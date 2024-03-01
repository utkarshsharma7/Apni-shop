import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return (
      <div className="hero-banner">
        <div className="content">
          <div className="text-content">
            <h1>SALES</h1>
            <p>
              Immerse yourself in a symphony of sound with our cutting-edge
              headphones. Experience music like never before, where every note
              comes alive and takes you on a journey of pure audio bliss.
              Elevate your audio experience and escape into a world of
              unparalleled sonic euphoria.
            </p>
            <div className="ctas">
              <div className="banner-cta">Read More</div>
              <div className="banner-cta v2">Shop Now</div>
            </div>
          </div>
          <img className="banner-img" src={BannerImg} alt="" />
        </div>
      </div>
    );
};

export default Banner;
