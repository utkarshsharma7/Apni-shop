import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
      <div className="footer">
        <div className="footer-content">
          <div className="col">
            <div className="title">About</div>
            <div className="text">
              Discover a world of endless shopping delights at our premium
              ecommerce emporium! Unleash your desires and indulge in the latest
              trends, hottest deals, and exclusive finds – all just a click
              away. Elevate your shopping experience today and let our curated
              collections redefine your style.
            </div>
          </div>
          <div className="col">
            <div className="title">Contact</div>
            <div className="c-item">
              <FaLocationArrow />
              <div className="text">Paschim Vihar , New Delhi 110063</div>
            </div>
            <div className="c-item">
              <FaMobileAlt />
              <div className="text">Phone: 6395532309</div>
            </div>
            <div className="c-item">
              <FaEnvelope />
              <div className="text">Email: ussharma7696@gmail.com</div>
            </div>
          </div>
          <div className="col">
            <div className="title">Categories</div>
            <span className="text">Headphones</span>
            <span className="text">Smart Watches</span>
            <span className="text">Bluetooth Speakers</span>
            <span className="text">Wireless Earbuds</span>
            <span className="text">Home Theatre</span>
            <span className="text">Projectors</span>
          </div>
          <div className="col">
            <div className="title">Pages</div>
            <span className="text">Home</span>
            <span className="text">About</span>
            <span className="text">Privacy Policy</span>
            <span className="text">Returns</span>
            <span className="text">Terms & Conditions</span>
            <span className="text">Contact Us</span>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="bottom-bar-content">
            <span className="text">
              APNI_SHOP 2023 created by Utkarsh Sharma
            </span>
            <img src={Payment} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Footer;
