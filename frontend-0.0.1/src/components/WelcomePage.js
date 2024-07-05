import React, { useState } from "react";
import "../App.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Parking from "./Images/Car_Parking.jpg";

export default function Login() {
  const [type, setType] = useState("signIn");
  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className="Login">
      <div className={containerClass} id="container">
        <SignUp />
        <SignIn />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <div class="left-content">
                <h1>Welcome to Book-N-Park</h1>
                <h4>Login and Start Booking</h4>
                <button
                  className="ghost"
                  id="signIn"
                  onClick={() => handleOnClick("signIn")}
                >
                  Sign In
                </button>
              </div>
              <div className="left-image">
                <img className="image-left" alt="Parking" src={Parking}></img>
              </div>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Welcome to Book-N-Park</h1>
              <h4>Create Account and Start Booking</h4>
              <button
                className="ghost "
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
              <div className="right-image">
                <img className="image-right" alt="Parking" src={Parking}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
