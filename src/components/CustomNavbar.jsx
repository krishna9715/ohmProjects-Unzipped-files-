import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link for routing
import './CustomNavbar.css';
import logo from '../assets/logo.jpg';
import hamburgerIcon from '../assets/hamburger.png';
import Register from './Register';
import Login from './Login';
import ListYourProperty from './ListYourProperty';

const CustomNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showListYourProperty, setShowListYourProperty] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in when the component mounts
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, []);

  // Toggle the main hamburger menu modal
  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  // Toggle the Login modal
  const handleLoginToggle = () => {
    setShowModal(false); // Close the main menu modal
    setShowLogin(!showLogin); // Toggle the Login modal
  };

  // Toggle the Register modal
  const handleRegisterToggle = () => {
    setShowModal(false); // Close the main menu modal
    setShowRegister(!showRegister); // Toggle the Register modal
  };

  // Close the Register modal and open the Login modal
  const handleShowLoginFromRegister = () => {
    setShowRegister(false); // Close the Register modal
    setShowLogin(true); // Open the Login modal
  };

  // Handle List Your OHM button click
  const handleListPropertyClick = () => {
    if (!isLoggedIn) {
      // Open the login modal if the user is not logged in
      setShowLogin(true);
    } else {
      // Open the List Your Property modal if the user is logged in
      setShowListYourProperty(true);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Nest Away" />
        </div>

        <div className={`navbar-right ${showModal ? 'shift-left' : ''}`}>
          <button className="list-property-btn" onClick={handleListPropertyClick}>
            List Your OHM
          </button>

          <div className="navbar-hamburger" onClick={handleModalToggle}>
            <img src={hamburgerIcon} alt="Menu" className="hamburger-img" />
          </div>
        </div>
      </nav>

      {/* Main Hamburger Menu Modal */}
      <Modal
        show={showModal}
        onHide={handleModalToggle}
        className={`slide-in-modal ${showModal ? 'slide-in' : 'slide-out'}`}
        dialogClassName="modal-dialog-slide"
      >
        <Modal.Header>
          <Button variant="link" className="close-btn" onClick={handleModalToggle}>
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <ul className="modal-menu">
            <li><Link to="/explore" onClick={handleModalToggle}>Explore</Link></li>
            <li><Link to="/about" onClick={handleModalToggle}>About Us</Link></li>
            <li><Link to="/work" onClick={handleModalToggle}>Work with Us</Link></li>
            <li><Link to="/privacy" onClick={handleModalToggle}>Privacy Policy</Link></li>
            <li><Link to="/faq" onClick={handleModalToggle}>FAQ</Link></li>
            <li>For Property Owners</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          {isLoggedIn ? (
            <button className="btn btn-primary" onClick={handleListPropertyClick}>
              List Your Property
            </button>
          ) : (
            <>
              <button className="btn btn-light" onClick={handleRegisterToggle}>
                Create Account
              </button>
              <button className="btn text-dark button-style" onClick={handleLoginToggle}>
                Login
              </button>
            </>
          )}
        </Modal.Footer>
      </Modal>

      {/* Register Modal */}
      <Register
        show={showRegister}
        handleClose={handleRegisterToggle}
        handleShowLogin={handleShowLoginFromRegister}
      />

      {/* Login Modal */}
      <Login
        show={showLogin}
        handleClose={handleLoginToggle}
        handleShowRegister={handleRegisterToggle}
      />

      {/* List Your Property Modal */}
      <ListYourProperty 
        show={showListYourProperty} 
        handleClose={() => setShowListYourProperty(false)} 
      />
    </div>
  );
};

export default CustomNavbar;
