// import React from "react";
// import "./Login.css";

// const FarmersLogin = () => {
//   return (
//     <main className="login-container">
//       <section className="login-wrapper">
//         <article className="login-left">
//           <article className="inner-login-left">
//             <article className="login-text">
//               <p>
//                 Glad to have you back. <br /> What would you like to do today?
//               </p>
//             </article>
//           </article>
//         </article>
//         <article className="login-right">
//           <article className="inner-login-right">
//             <form>
//               <input type="text" placeholder="Email" />
//               <input type="password" placeholder="Password" />
//               <button type="submit">Login</button>
//               <a href="#">Forgot Password?</a>
//             </form>
//             <p>
//               Don't have an account? <a href="#">Sign Up</a>
//             </p>
//           </article>
//         </article>
//       </section>
//     </main>
//   );
// };

// export default FarmersLogin;

import React from "react";
import "./Login.css"; // Import the CSS file for styling
import userIcon from "../../assets/Images/user-icon.png"; // Import the user icon image

const LoginForm = () => {
  return (
    <main className="login-container">
      <section className="login-wrapper">
        <section className="welcome-section">
          <div className="welcome-message-wrapper">
            <div className="welcome-message">
              <h2>Glad to have you back.</h2>
              <p>What would you like to do today?</p>
            </div>
          </div>
        </section>
        <section className="form-section">
          {/* <header className="form-header"> */}
          <div className="user-icon">
            <img src={userIcon} alt="User Icon" />
          </div>
          {/* </header> */}
          <form className="login-form">
            <div class="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder=" "
                required
              />
              <label for="email">Email</label>
            </div>
            <div class="form-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder=" "
                required
              />
              <label for="password">Password</label>
            </div>
            <a href="/forgot-password" className="forgot-password-link">
              Forget password
            </a>
            <div className="form-actions">
              <button type="submit">Login</button>
            </div>
          </form>
          <footer className="signup-prompt">
            <p>
              Don't have an account? <a href="/signup">SignUp</a>
            </p>
          </footer>
        </section>
      </section>
    </main>
  );
};

export default LoginForm;
