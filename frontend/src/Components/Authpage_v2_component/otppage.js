// Otppage.js

import React, { useState, useContext } from "react";
import "./Otp.css";
import { signup } from "../Apiservice/api";
import { AccountContext } from "../Contextapi/Accountprovider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {OTPConfig} from '../../config';

const Otppage = ({ name, email, phonenumber, password, otp }) => {
  const { setAccount } = useContext(AccountContext);
  const [enterotp, setenterOtp] = useState("");

  const handleVerifyUser = async () => {
    try {
      if (enterotp === otp) {
        const response = await signup({
          name: name,
          email: email,
          phonenumber: phonenumber,
          password: password,
        });

        if (response.status === 200) {
               // If signup is successful, set the account in context
      
      setAccount(response?.data?.user);
      // console.log("token is ",response?.data?.token)
      sessionStorage.setItem('token', response?.data?.token);
        }

        if (response.status === 203) {
          toast(OTPConfig.messages.userExists);
        }
      } else {
        toast(OTPConfig.messages.otpMismatch);
        
      }

    } catch (err) {
      console.log(OTPConfig.messages.errorVerifyOTP, err);
    }
  }

  return (
    <div className="Otp_Container">
      <div className="inner_Otp_Container">
        <h1>Verify</h1>
        <p className="Otp_page_info">A verification code has been sent to you. Enter the code below</p>

        <input
          type="text"
          placeholder={OTPConfig.placeholders.otp}
          value={enterotp}
          onChange={(e) => setenterOtp(e.target.value)}
          className="otpInput"
        />

        <button className="Otp_button" onClick={handleVerifyUser}>Verify and Register</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Otppage;
