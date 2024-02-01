// Signuppage.js

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendotp } from "../Apiservice/api";
import Otppage from "./otppage";
import Signinpage from "./signinpage";
import { SignupConfig } from "../../config";
import "./signuppage.css";

function generaterandomnumber() {
  return Math.floor(100000 + Math.random() * 900000);
}

export default function Signuppage() {
  // State variables for form inputs
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [password, setpassword] = useState("");
  const [otp, setotp] = useState(generaterandomnumber().toString());
  const [confirmpassword, setconfirmpassword] = useState("");

  // State variable to control rendering of Signinpage component
  const [showSigninPage, setShowSigninPage] = useState(false);
  const [showotppage, setshowotppage] = useState(false);

  // Function to navigate to the Signinpage component
  const gotosigninpagehandler = () => {
    setShowSigninPage(true);
  };

  // Function to handle the signup process
  const signuphandler = async () => {
    try {
      // Check if passwords match
      if (confirmpassword === password) {
        // send otp to email
        await sendotp({ email: email, otp: otp });
        setshowotppage(true);
      } else {
        // If passwords don't match, show a toast notification
        toast(SignupConfig.toastMessages.passwordMismatch);
      }
    } catch (err) {
      console.log("Error in signup process in Signuppage", err);
    }
  };

  return (
    <>
      {showotppage ? (
        <Otppage
          name={name}
          email={email}
          phonenumber={phonenumber}
          password={password}
          otp={otp}
        />
      ) : showSigninPage ? (
        <Signinpage />
      ) : (
        <div className="signup_page_main">
          <div className="signup_page_inner">
            <div className="signuppage_title">
              <h2 className="signup_title">Sign Up</h2>
            </div>
            <div>
              <label className="signup_label">Name</label>
              <input
                type="text"
                className="signup_input"
                placeholder={SignupConfig.placeholderTexts.name}
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div>
              <label className="signup_label">Email</label>
              <input
                type="email"
                className="signup_input"
                placeholder={SignupConfig.placeholderTexts.email}
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div>
              <label className="signup_label">Phone Number</label>
              <input
                type="String"
                className="signup_input"
                placeholder={SignupConfig.placeholderTexts.phoneNumber}
                value={phonenumber}
                onChange={(e) => setphonenumber(e.target.value)}
              />
            </div>
            <div>
              <label className="signup_label">Password</label>
              <input
                type="password"
                className="signup_input"
                placeholder={SignupConfig.placeholderTexts.password}
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div>
              <label className="signup_label">Confirm Password</label>
              <input
                type="password"
                className="signup_input"
                placeholder={SignupConfig.placeholderTexts.confirmPassword}
                value={confirmpassword}
                onChange={(e) => setconfirmpassword(e.target.value)}
              />
            </div>
            {/* Signup button */}
            <button
              type="submit"
              onClick={signuphandler}
              className="signup_button"
            >
              Sign Up
            </button>
            {/* Link to go to the Signinpage */}
            <button
              className="gotosignin_button"
              onClick={gotosigninpagehandler}
            >
              For sign in click here
            </button>
            {/* Toast notifications container */}
            <ToastContainer />
          </div>
        </div>
      )}
    </>
  );
}
