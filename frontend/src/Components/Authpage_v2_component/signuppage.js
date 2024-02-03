import React, { useEffect, useState } from "react";
import Signinpage from "./signinpage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendotp } from "../Apiservice/api";
import Otppage from "./otppage";
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
  const [isEmailValid, setisEmailValid] = useState(true);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [isPassStrong, setIsPassStrong] = useState(true);
  const [isSamePass, setIsSamePass] = useState(true);
  // State variable to control rendering of Signinpage component
  const [showSigninPage, setShowSigninPage] = useState(false);
  const [showotppage, setshowotppage] = useState(false);

  // Function to navigate to the Signinpage component
  const gotosigninpagehandler = () => {
    setShowSigninPage(true);
  };
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setisEmailValid(isValid);
  };
  const validatePhoneNumber = () => {
    const phoneRegex = /^\d{10}$/;
    const isValid = phoneRegex.test(phonenumber);
    setIsPhoneNumberValid(isValid);
  };
  const isStrongPassword = () => {
    // Minimum 8 characters, at least one uppercase letter, one lowercase letter, and one special character
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isStrong = strongPasswordRegex.test(password);
    setIsPassStrong(isStrong);
  };
  const matchPass = () => {
    const ismatch = confirmpassword === password;
    setIsSamePass(ismatch);
  };

  const isFormValid =() =>{
    return name.trim() !== '' && email.trim() !=='' && phonenumber.trim() !== '' && password.trim() !== '' && isPassStrong && confirmpassword.trim() !== '' && isSamePass;
  }
  // Function to handle the signup process
  const signuphandler = async () => {
    try {
        // send otp to email
        //  demotest = generaterandomnumber();
        // setotp(demotest);
        // console.log(otp);
        await sendotp({ email: email, otp: otp });
        setshowotppage(true);
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
                id="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                onBlur={validateEmail}
              />
              {!isEmailValid && (
                <span style={{ color: "red" }}>
                  Please enter a valid email address
                </span>
              )}
            </div>
            <div>
              <label className="signup_label">Phone Number</label>
              <input
                type="String"
                className="signup_input"
                placeholder={SignupConfig.placeholderTexts.phoneNumber}
                value={phonenumber}
                onChange={(e) => setphonenumber(e.target.value)}
                onBlur={validatePhoneNumber}
              />
              {!isPhoneNumberValid && (
                <span style={{ color: "red" }}>
                  Please enter a valid phone number
                </span>
              )}
            </div>
            <div>
              <label className="signup_label">Password</label>
              <input
                type="password"
                className="signup_input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                onBlur={isStrongPassword}
              />
              {!isPassStrong && (
                <span style={{ color: "red" }}>
                  Password needed to be strong
                </span>
              )}
            </div>
            <div>
             
              <label className="signup_label">Confirm Password</label>
              <input
                type="password"
                className="signup_input"
                placeholder={SignupConfig.placeholderTexts.confirmPassword}
                value={confirmpassword}
                onChange={(e) => setconfirmpassword(e.target.value)}
                onBlur={() => {matchPass();
                }}
              />
              {!isSamePass && (
                <span style={{ color: "red" }}>
                  Password doesn't match
                </span>
              )}
            </div>
            {/* Signup button */}
            <button
              type="submit"
              onClick={()=>{
                
                signuphandler();
              }}
              className="signup_button"
              disabled = {!isFormValid()}
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
