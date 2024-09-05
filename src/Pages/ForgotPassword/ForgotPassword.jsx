import React from "react";
import "./ForgotPassword.css"; // Updated CSS file
import userIcon from "../../assets/Images/user-icon.png"; // Import the user icon image
import Button from "../../Components/Button/Button";
import { NavLink } from "react-router-dom";

const ForgotPasswordForm = () => {
  return (
    <section className="forgotpassword-wrapper">
      <section className="forgotpassword-form-section">
        <section className="forgotpassword-form-header">
          <div className="forgotpassword-title">
            <p>It's ok to Forget!</p>
          </div>
          <div className="forgotpassword-message">
           <p> Enter the email address associated with <br /> your account</p>
          </div>
        </section>
        <form className="forgotpassword-form" action="#" method="POST">
          <div className="forgotpassword-form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="forgotpassword-form-actions">
            <Button>Send OTP</Button>
          </div>
        </form>
        <section className="signup-prompt">
          <p>
            Want to Go Back? <NavLink to="/login">Go Back</NavLink>
          </p>
        </section>
      </section>
    </section>
  );
};

export default ForgotPasswordForm;
