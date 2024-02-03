import React, { useEffect, useState } from "react";
import Signuppage from "./signuppage";
import { signin } from "../Apiservice/api";
import { useContext } from "react";
import { AccountContext } from "../Contextapi/Accountprovider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./signinpage.css";
import {SigninConfig} from '../../config';
import { jwtDecode } from "jwt-decode";

export default function Signinpage() {
  const { setAccount } = useContext(AccountContext);

  // State variables for email, password, and controlling the rendering of Signuppage
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [showSignuppage, setShowSignuppage] = useState(false);


  useEffect(() => {
    // check if a token exists in local storage 
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      
      // Decode the token
      const decodedToken = jwtDecode(storedToken);
      
      // destructure the expire time of token 
      const {exp}=decodedToken;
      
      // User session is active if current time is less then the expire time 
      if(exp>Math.floor(Date.now() / 1000))
      setAccount(decodedToken.user);

    }
  }, [])

  // Function to navigate to the Signuppage component
  const routetosignuppagehandler = () => {
    setShowSignuppage(true);
  }

  const signinhandler = async () => {
    try {
      if (email && password) {
        const response = await signin({ email: email, password: password });

        if (response.status === 200) {

          // If signin is successful, set the account in context
          setAccount(response?.data?.user);
          // console.log("in sign in page new user token is ",response?.data?.token)
          sessionStorage.setItem('token', response?.data?.token);

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
