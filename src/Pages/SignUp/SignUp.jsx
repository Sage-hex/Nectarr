import React from "react";
import "./SignUp.css";
import Button from "../../Components/Button/Button";

const SignUp = () => {
  return (
    <main className="signup-container">
      <section className="signup-wrapper">
        <section className="welcome-section">
          <div className="welcome-message-wrapper">
            <div className="welcome-message">
              <h2>
                Explore, discover, <br /> and enjoy. Let's <br /> make your day
                a <br /> little brighter.
              </h2>
              <p>What would you like to do today?</p>
            </div>
          </div>
        </section>
        <section className="signup-form-section">
          <div className="signup-text">
            <h2>Create an account</h2>
            <p>Sign up now and unlock exclusive access!</p>
          </div>
          <form className="signup-form" action="#" method="GET">
            <div className="signup-form-group">
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder=" "
                required
              />
              <label htmlFor="firstname">First Name</label>
            </div>
            <div className="signup-form-group">
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder=" "
                required
              />
              <label htmlFor="lastname">Last Name</label>
            </div>
            <div className="signup-form-group">
              <select id="gender" name="gender" required>
                <option value="" disabled selected hidden></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <label htmlFor="gender">Gender</label>
            </div>
            <div className="signup-form-group">
              <input
                type="text"
                id="location"
                name="location"
                placeholder=" "
                required
              />
              <label htmlFor="location">Location</label>
            </div>
            <div className="signup-form-group">
              <input type="tel" id="tel" name="tel" placeholder=" " required />
              <label htmlFor="tel">Telephone</label>
            </div>
            <div className="signup-form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder=" "
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="signup-form-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder=" "
                required
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="signup-form-group">
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder=" "
                required
              />
              <label htmlFor="confirm-password">Confirm Password</label>
            </div>
            <div className="signup-form-actions">
              <Button>Sign Up</Button>
            </div>
          </form>
          <article className="signup-footer-secion">
            <div className="login-prompt">
              <p>
                Already have an account? <a href="/login">Login</a>
              </p>
            </div>
            <div className="terms">
              <p>By Clicking Sign In, you agree to our terms and conditions</p>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
};


export default SignUp;
