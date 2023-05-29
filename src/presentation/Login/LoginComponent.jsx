import React, { useState } from "react";
import LoginImg from "../../infrastructure/assets/images/login_design.jpeg";
import BioOrganicLogo from "../../infrastructure/assets/images/logo.png";
import { Link } from "react-router-dom";

const LoginComponent = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  console.log("input", input);

  return (
    <div className=" login">
      <img className="background-img" src={LoginImg} />
      <div className="login-container">
        <div className="d-flex justify-content-center align-items-center">
          <img className="bio-logo me-2" src={BioOrganicLogo} />
          <span
            style={{
              fontSize: "17px",
              color: "#a3238e",
            }}
          >
            BioOrganics
          </span>
        </div>
        <div
          style={{
            borderTop: "2px solid #fff ",
            marginLeft: 20,
            marginRight: 20,
          }}
        ></div>
        <hr />
        <h3 className="mt-3" style={{ fontWeight: "bold" }}>
          Log in
        </h3>
        <input
          placeholder="Email Address"
          style={{
            width: "22rem",
            height: "3rem",
            borderRadius: "5px",
            marginBottom: "20px",
            border: "1px solid rgb(209 209 209)",
          }}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
        <input
          placeholder="Password"
          style={{
            width: "22rem",
            height: "3rem",
            borderRadius: "5px",
            border: "1px solid rgb(209 209 209)",
          }}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
        <div
          style={{ marginLeft: "57px", marginRight: "57px" }}
          className="d-flex justify-content-between align-items-center mt-3"
        >
          <div className="mt-2 d-flex justify-content align-items-center remember-me">
            <input type="checkbox" className="checkbox-btn" />
            &nbsp;
            <span style={{ fontWeight: "bold", fontSize: "13px" }}>
              Remember me
            </span>
          </div>
          <div>
            <span
              className="remember-me"
              style={{ fontWeight: "bold", fontSize: "13px" }}
            >
              Forgot Password?
            </span>
          </div>
        </div>
        <button className="login-submit-btn">Submit</button>
      </div>
    </div>
  );
};

export default LoginComponent;
