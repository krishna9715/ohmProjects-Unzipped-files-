import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="footer-content">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                <div className="logo-widget footer-widget">
                  <figure className="logo-box">
                    <a href="#">
                      <img src="https://i.ibb.co/QDy827D/ak-logo.png" alt="Logo" />
                    </a>
                  </figure>
                  <div className="text">
                    <p>Lorem ipsum dolor amet consectetur adipisicing elit sed eiusmod tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis nostrud exercitation.</p>
                  </div>
                  <ul className="footer-social">
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-vimeo-v"></i></a></li>
                    <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 offset-lg-2 footer-column">
                <div className="service-widget footer-widget">
                  <div className="footer-title">Services</div>
                  <ul className="list">
                    <li><a href="#">Water Survey</a></li>
                    <li><a href="#">Education for All</a></li>
                    <li><a href="#">Food Serving</a></li>
                    <li><a href="#">Animal Saves</a></li>
                    <li><a href="#">Help Orphans</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 footer-widget">
                <div className="contact-widget footer-widget">
                  <div className="footer-title">Contacts</div>
                  <div className="text">
                    <p>Lorem Ipsum, simply dummy text, printing, Chandigarh</p>
                    <p>+2(784) 1223323</p>
                    <p>info@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 column">
              <div className="copyright">
                <a href="#">Testalogix</a> &copy; 2019 All Rights Reserved
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 column">
              <ul className="footer-nav">
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
