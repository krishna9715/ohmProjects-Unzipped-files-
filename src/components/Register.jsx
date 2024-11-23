import React, { useState } from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import GoogleLogo from '../assets/googleIcon.png';
import './Register.css';
import OtpModal from './OtpModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = ({ show, handleClose, handleShowLogin }) => {
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    referralCode: ''
  });
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [loading, setLoading] = useState(false); // Loader state

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    toast.dismiss(); // Dismiss previous toasts on input change
  };

  const validateInput = () => {
    const { firstName, lastName, phone, email } = userDetails;

    if (!firstName || !lastName || !phone || !email) {
      return 'Please fill in all required fields to continue.';
    }
    if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
      return 'First and last names must contain only letters.';
    }
    if (!/^\d+$/.test(phone)) {
      return 'Phone number must contain only numbers.';
    }
    if (!email.includes('@')) {
      return 'Email must contain "@" symbol.';
    }
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateInput();
    if (error) {
      toast.error(error); // Show error toast
      return;
    }

    const userPayload = {
      name: `${userDetails.firstName} ${userDetails.lastName}`,
      mobile: userDetails.phone,
      email: userDetails.email,
      referralCode: userDetails.referralCode,
    };

    setLoading(true); // Start loading

    try {
      const response = await fetch('http://localhost:4000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userPayload),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success('OTP sent successfully!'); // Show success toast
        setShowOtpModal(true);  // Show OTP modal
        handleClose();          // Close the Register modal
        
      } else {
        toast.error(data.message); // Show error toast
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An unexpected error occurred. Please try again.'); // Show error toast
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Handle OTP resend from OTP modal
  const handleResendOtp = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/auth/resend-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userDetails.email }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success('OTP resent successfully!');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error resending OTP:', error);
      toast.error('Failed to resend OTP. Please try again.');
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Button variant="link" className="close-btn" onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div className="register-container">
            <h2>Register and find your OHM!</h2>
            <form className="register-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  name="firstName"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  name="phone"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Referral Code (Optional)"
                  name="referralCode"
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="continue-btn" disabled={loading}>
                {loading ? (
                  <>
                    <Spinner animation="border" size="sm" /> {/* Loader */}
                    {' '}Loading...
                  </>
                ) : (
                  'Continue'
                )}
              </button>
            </form>
            <div className="register-footer">
              <p>OR</p>
              <button className="google-btn">
                <img src={GoogleLogo} alt="Google Logo" style={{ width: '20px', height: '20px' }} />
                Sign in with Google
              </button>
              <p>
                Already have an account?{' '}
                <span className='text-primary' style={{ cursor: 'pointer' }} onClick={() => {
                  handleClose();
                  handleShowLogin();
                }}>
                  Login
                </span>
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <OtpModal 
        show={showOtpModal} 
        handleClose={() => setShowOtpModal(false)} 
        email={userDetails.email}
        handleResendOtp={handleResendOtp} 
      />
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={true} closeOnClick pauseOnHover draggable />
    </>
  );
};

export default Register;
