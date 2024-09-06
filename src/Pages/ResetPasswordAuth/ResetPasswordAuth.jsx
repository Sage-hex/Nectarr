import React, { useState } from "react";
import "./ResetPasswordAuth.css"; // Updated CSS file for styling
import Button from "../../Components/Button/Button"; // Assuming you already have a button component

const ResetPasswordAuth = () => {
  const [code, setCode] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    const newCode = [...code];
    newCode[index] = element.value;
    setCode(newCode);

    // Move to next input box if not at the last one
    if (element.nextSibling && element.value !== "") {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Entered code is: ${code.join("")}`);
  };

  return (
    <section className="resetpasswordauth-wrapper">
      <section className="resetpasswordauth-box">
        <h2>Get your code</h2>
        <p>Please enter your 4 digit code sent to your email</p>
        <form onSubmit={handleSubmit} className="resetpasswordauth-form">
          <div className="resetpasswordauth-inputs">
            {code.map((item, index) => (
              <input
                type="text"
                maxLength="1"
                key={index}
                value={item}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            ))}
          </div>
          <div className="resetpasswordauth-actions">
            <Button>Verify and proceed</Button>
          </div>
        </form>
        <p>
          Didn’t receive a code? <span className="resend-link">Resend</span>
        </p>
      </section>
    </section>
  );
};

export default ResetPasswordAuth;
