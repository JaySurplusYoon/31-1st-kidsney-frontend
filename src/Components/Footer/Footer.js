import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerTitle">
        <div className="footerText">
          <p className="headTxt">New Kidsney® Visa® Cardmembers can earn a</p>
          <h3 className="midTxt">
            <span className="currency">$</span>
            <span className="amount">100</span>
            <span className="txt">Statement Credit</span>
          </h3>
          <div className="links">
            <span className="linksTxt">Restrictions apply.</span>
            <button class="linksBtn">
              <Link to="/">Learn More</Link>
            </button>
          </div>
        </div>
        <div className="footerImg">
          <img
            src="https://images.unsplash.com/photo-1572635148619-a66d0ddbc9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="cards"
          />
        </div>
      </div>
      <div className="footerContainer">
        <div className="signUp">
          <div className="signUpTxt">
            Sign up for our emails to get the inside scoop on special offers and
            new products.
          </div>
          <div className="signUpLinks">
            <button className="signUpBtn">Sign up</button>
            <div className="privacyPolicy">
              <span className="policy">Stay in Touch</span>
              <Link to="/">Privacy Policy</Link>
            </div>
          </div>
          <div className="socialIcons">
            <i class="fab fa-facebook-f" />
            <i class="fab fa-instagram" />
            <i class="fab fa-twitter" />
            <i class="fab fa-pinterest-p" />
          </div>
        </div>
        <div className="items">
          <div className="category">
            <ul>
              <li>Characters</li>
              <li>Parks</li>
              <li>Disney</li>
              <li>Pixar</li>
              <li>Star Wars</li>
              <li>Marvel</li>
              <li>National Geographic</li>
            </ul>
          </div>
          <div className="contentAsset">
            <ul>
              <li>D23</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Site Map</li>
              <li>New</li>
              <li>Sale</li>
            </ul>
            <ul>
              <li>Order Tracking</li>
              <li>Return/Exchange</li>
              <li>Shipping Info</li>
              <li>Account Info</li>
              <li>Store Locator</li>
            </ul>
            <ul>
              <li>Disney Gift Cards</li>
              <li>Guest Services</li>
              <li>Affiliates</li>
              <li>About shopDisney</li>
              <li>Disney® Visa® Card</li>
              <li>Personalization Shop</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footerCopyright">
        <div className="copyrightList">
          <ul>
            <li>© Kidsney, All Rights Reserved</li>
            <li>Terms of Use</li>
            <li>Additional Content Information</li>
            <li>Privacy Policy</li>
            <li>Your California Privacy Rights</li>
            <li>Do Not Sell My Personal Information</li>
            <li>Children's Online Privacy Policy</li>
            <li>About Kidsney</li>
            <li>Interest-Based Ads</li>
            <li>California Transparency in Supply Chains Act</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

const FOOTER_INFO_LIST = [];

export default Footer;
