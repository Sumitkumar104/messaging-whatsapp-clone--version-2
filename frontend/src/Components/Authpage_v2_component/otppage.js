import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRotateRight } from '@fortawesome/free-solid-svg-icons'
import "./Otp.css"
import { Button } from "@mui/material";

const Otp = () => {
  // State to manage OTP input values
  const [otp, setOtp] = useState(new Array(6).fill(""));

  // Ref to store input references
  const inputRefs = useRef([]);

  // Use effect to focus on the first input when component mounts
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  // Handle OTP input change
  const handleChange_Otp = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return; // Only allow numeric input

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    
    // Move focus to the next input if not last
    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }

    // Check if OTP is complete and submit
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === 6) onsubmit(combinedOtp);
  };

  // Handle key down event for OTP input
  const handleKeyDown_Otp = (index, e) => {
    // Move focus to the previous input on backspace
    if (e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle OTP submission
  const onsubmit = (otp) => {
    console.log("Login Successful", otp);
    // Add your logic for handling OTP submission
  };

  return (
    <div className="Otp_Container">
      <div className="inner_Otp_Container">
        <h1>Verify</h1>
        <p className="Otp_page_info">A verification code has been sent to you. Enter the code below</p>
        
        {otp.map((value, index) => {
          return (
            <input
              key={index}
              type="text"
              ref={(input) => (inputRefs.current[index] = input)}
              value={value}
              onChange={(e) => handleChange_Otp(index, e)}
              onKeyDown={(e) => handleKeyDown_Otp(index, e)}
              className="otpInput"
            />
          );
        })}
        <button className="Otp_button">Verify and Register</button>
      </div>
      <div className="Otp_Page_buttom">
        <div className='Otppage_goto_loginpage'><FontAwesomeIcon className="ForgetpaswPage_icon" icon={faArrowLeft} />Back to Login</div>
        <Button><FontAwesomeIcon className="ForgetpaswPage_icon" icon={faArrowRotateRight} />Resend it</Button>
      </div>
    </div>
  );
};

export default Otp;
