import React, { useState } from "react";
import styled from "styled-components";

const Verification = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    const form = e.target.form;
    const index = [...form].indexOf(e.target);
    if (index + 1 < form.length) {
      if (e.target.value.length === 1) {
        form.elements[index + 1].focus();
      }
    } else {
      //disable inputs
      setDisabled(true);
      //API calls try catch block (success => proceed else display error and enable buttons again after removing the state)
    }
    setVerificationCode(verificationCode + e.target.value.toString());
    e.preventDefault();
  };
  return (
    <VerificationWrapper>
      <div className="container">
        <h2>Verify Your Account</h2>
        <p>
          We emailed you the six digit code to cool_guy@email.com <br /> Enter
          the code below to confirm your email address.
        </p>
        <form className="code-container">
          <input
            type="number"
            className="code"
            placeholder="0"
            min="0"
            max="9"
            required
            onChange={handleChange}
            disabled={disabled}
          />
          <input
            type="number"
            className="code"
            placeholder="0"
            min="0"
            max="9"
            required
            onChange={handleChange}
            disabled={disabled}
          />
          <input
            type="number"
            className="code"
            placeholder="0"
            min="0"
            max="9"
            required
            onChange={handleChange}
            disabled={disabled}
          />
          <input
            type="number"
            className="code"
            placeholder="0"
            min="0"
            max="9"
            required
            onChange={handleChange}
            disabled={disabled}
          />
          <input
            type="number"
            className="code"
            placeholder="0"
            min="0"
            max="9"
            required
            onChange={handleChange}
            disabled={disabled}
          />
          <input
            type="number"
            className="code"
            placeholder="0"
            min="0"
            max="9"
            required
            onChange={handleChange}
            disabled={disabled}
          />
        </form>
        <small className="info">
          This is design only. We didn't actually send you an email as we don't
          have your email, right?
        </small>
      </div>
    </VerificationWrapper>
  );
};

const VerificationWrapper = styled.div`
  .container {
    background-color: #fff;
    border: 3px #000 solid;
    border-radius: 10px;
    padding: 30px;
    max-width: 1000px;
    text-align: center;
  }

  .code-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0;
    padding: 20px;
  }

  .code {
    caret-color: transparent;
    border-radius: 5px;
    font-size: 75px;
    height: 120px;
    width: 100px;
    border: 1px solid #eee;
    margin: 1%;
    text-align: center;
    font-weight: 300;
    -moz-appearance: textfield;
  }

  .code::-webkit-outer-spin-button,
  .code::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .code:valid {
    border-color: #3498db;
    box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.25);
  }

  .info {
    background-color: #eaeaea;
    display: inline-block;
    padding: 10px;
    line-height: 20px;
    max-width: 400px;
    color: #777;
    border-radius: 5px;
  }

  @media (max-width: 600px) {
    .code-container {
      flex-wrap: wrap;
    }

    .code {
      font-size: 60px;
      height: 80px;
      max-width: 70px;
    }
  }
`;

export default Verification;
