import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "./OtpModal.css"; // Custom styling for the OTP modal
import { toast } from "react-toastify"; // Import toast

const OtpModal = ({ show, handleClose, email, handleResendOtp }) => {
  const [otp, setOtp] = useState(Array(4).fill("")); // Array to hold the 4 OTP digits

  // Reset OTP when modal is closed
  useEffect(() => {
    if (!show) {
      setOtp(Array(4).fill(""));
    }
  }, [show]);

  const handleChange = (element, index) => {
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Move to the next input field
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Move back on empty backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.querySelector(`#otp-input-${index - 1}`).focus();
    }
  };

  const handleSubmitOtp = async () => {
    const finalOtp = otp.join("");

    if (finalOtp.length !== 4) {
      toast.error("Please enter a valid 4-digit OTP.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: finalOtp }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("OTP Verified!");

        // Store user information and isLoggedIn status in local storage
        localStorage.setItem("userId", data.userId); // Store userId
        localStorage.setItem("isLoggedIn", JSON.stringify(data.isLoggedIn)); // Store isLoggedIn status

        // Reload the window to update the application state
        window.location.reload();

        handleClose(); // Close the modal
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Error verifying OTP.");
      console.error("Error:", error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="otp-modal">
      <Modal.Header closeButton>
        <Modal.Title>Enter OTP</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="otp-message">
          OTP sent to <strong>{email}</strong>
        </p>
        <div className="otp-input-container">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`} // Added ID for access
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="otp-box"
              onFocus={(e) => e.target.select()} // Select input on focus
            />
          ))}
        </div>
        <div className="button-container">
          <Button
            variant="primary"
            onClick={handleSubmitOtp}
            className="submit-btn"
          >
            Submit
          </Button>
          <Button
            variant="secondary"
            onClick={handleClose}
            className="cancel-btn"
          >
            Cancel
          </Button>
        </div>
        <p className="resend-link" onClick={handleResendOtp}>
          Didn't receive OTP? Resend.
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default OtpModal;
