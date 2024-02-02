import React, { useState } from "react";
import Signuppage from "./signuppage";
import { signin } from "../Apiservice/api";
import { useContext } from "react";
import { AccountContext } from "../Contextapi/Accountprovider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./signinpage.css";
import {SigninConfig} from '../../config';

export default function Signinpage() {
  const { setAccount } = useContext(AccountContext);
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [showSignuppage, setShowSignuppage] = useState(false);

  const routetosignuppagehandler = () => {
    setShowSignuppage(true);
  }

  const signinhandler = async () => {
    try {
      if (email && password) {
        const response = await signin({ email: email, password: password });

        if (response.status === 200) {
          setAccount(response.data);
        }

        if (response.status === 203) {
          toast(SigninConfig.messages.userAlreadyExists);
        }
      } else {
        toast(SigninConfig.messages.enterCredentials);
      }
    } catch (err) {
      console.log('Error in signin page', err);
    }
  };

  return (
    <>
      {showSignuppage ? (
        <Signuppage />
      ) : (
        <div className="signin_page_main">
          <div className="signin_page_inner">
            <div className="signinpage_title"><h2 className="signin_title">Login</h2></div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="signin_label">
                Email Address
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="signin_input"
                placeholder={SigninConfig.placeholders.email}
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="signin_label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="signin_input"
                placeholder={SigninConfig.placeholders.password}
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="signin_button"
              onClick={signinhandler}
            >
              Sign In
            </button>
            <button className="signin_page_info" onClick={routetosignuppagehandler}>
              Don't have an account? Sign Up
            </button>
            <ToastContainer />
          </div>
        </div>
      )}
    </>
  );
}
