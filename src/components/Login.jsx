import React, { useState } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import GoogleLogo from "../assets/googleIcon.png";
import "./Login.css";
import OtpModal from "./OtpModal"; // Import OtpModal
import { toast } from "react-toastify"; // Import toast for notifications

const Login = ({ show, handleClose, handleShowRegister }) => {
  const [email, setEmail] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [loading, setLoading] = useState(false); // Loader state

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendOtp = async () => {
    setLoading(true); // Show loader during API request

    try {
      const response = await fetch("http://localhost:4000/api/auth/login-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        toast.error("Failed to send OTP: " + errorData);
        return; // Exit early if error occurs
      }

      const data = await response.json();
      toast.success("OTP sent successfully to your email!");

      // Show the OTP modal after successful OTP sending
      setShowOtpModal(true); // This should now display the modal
    } catch (error) {
      toast.error("Error sending OTP: " + error.message);
      console.error("Error:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleOtpModalClose = () => {
    setShowOtpModal(false);
  };

  const handleResendOtp = () => {
    handleSendOtp(); // Reuse the OTP sending function
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered className="login-modal">
        <Modal.Header>
          <Button variant="link" className="close-btn" onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div className="login-container">
            <h2>Login to Your Account</h2>
            <form className="login-form">
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Email id"
                  value={email}
                  onChange={handleEmailChange}
                  className="input-field"
                />
              </div>
              <Button
                className="continue-btn"
                disabled={!email}
                onClick={handleSendOtp} // Send OTP instead of direct login
              >
                {loading ? <Spinner animation="border" size="sm" /> : "Continue"}
              </Button>
            </form>
            <div className="login-footer">
              <p>OR</p>
              <Button className="google-btn">
                <img
                  src={GoogleLogo}
                  alt="Google Logo"
                  style={{ width: "20px", height: "20px" }}
                />
                <span className="text-dark">Sign in with Google</span>
              </Button>
              <p>
                Don’t have an account?{" "}
                <span
                  className="text-primary"
                  onClick={() => {
                    handleClose();
                    handleShowRegister();
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Register now.
                </span>
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* OTP Modal for OTP verification */}
      <OtpModal
        show={showOtpModal} // Ensure this state is passed correctly
        handleClose={handleOtpModalClose}
        email={email}
        handleResendOtp={handleResendOtp}
      />
    </>
  );
};

export default Login;
