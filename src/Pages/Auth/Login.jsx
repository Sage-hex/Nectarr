 import React from "react";
import "./Login.css"; // Import the CSS file for styling
import userIcon from "../../assets/Images/user-icon.png"; // Import the user icon image
import Button from "../../Components/Button/Button";

const LoginForm = () => {
  return (
    <main className="login-container">
      <section className="login-wrapper">
        <section className="login-welcome-section">
          <div className="login-welcome-message-wrapper">
            <div className="login-welcome-message">
              <h2>Glad to have you back.</h2>
              <p>What would you like to do today?</p>
            </div>
          </div>
        </section>
        <section className="login-form-section">
          {/* <header className="form-header"> */}
          <div className="user-icon">
            <img src={userIcon} alt="User Icon" />
          </div>
          {/* </header> */}
          <form className="login-form" action="#" method="POST">
            <div class="login-form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder=" "
                required
              />
              <label for="email">Email</label>
            </div>
            <div class="login-form-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder=" "
                required
              />
              <label for="password">Password</label>
            </div>
            {/* <div className="forget-password">

            </div> */}
            <a href="/forgot-password" className="forgot-password-link">
              Forget password
            </a>
            <div className="login-form-actions">
              <Button>Login</Button>
            </div>
          </form>
          <section className="signup-prompt">
            <p>
              Don't have an account? <a href="/signup">Signup</a>
            </p>
          </section>
        </section>
      </section>
    </main>
  );
};

export default LoginForm;
