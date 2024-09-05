import React from "react";
import "./ResetPassword.css"; // Updated CSS file
import userIcon from "../../assets/Images/user-icon.png"; // Import the user icon image
import Button from "../../Components/Button/Button";
import { NavLink } from "react-router-dom";

const ResetPassword = () => {
  return (
    <section className="resetpassword-wrapper">
      <section className="resetpassword-form-section">
        <section className="resetpassword-form-header">
          <div className="resetpassword-title">
            <p>Password Recovery</p>
          </div>
          <div className="resetpassword-message">
            <p>Create New Password</p>
          </div>
        </section>
        <form className="resetpassword-form" action="#" method="POST">
          <div className="resetpassword-form-group">
          <input
                type="password"
                name="password"
                placeholder=" "
                aria-label="Password"
                required
              />
            <label htmlFor="Confirm password">Create Password</label>
          </div>
          <div className="resetpassword-form-group">
          <input
                type="password"
                name="confirmPassword"
                placeholder=" "
                aria-label="Confirm password"
                required
              />
            <label htmlFor="Confirm password">Confirm password</label>
          </div>
          <div className="resetpassword-form-actions">
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

export default ResetPassword;
