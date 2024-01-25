import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Signuppage from "./signuppage";
import { signin } from "../Apiservice/api";
import { useContext } from "react";
import { AccountContext } from "../Contextapi/Accountprovider";
import './tailwindfile.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signinpage() {
  // Context for managing the user account
  const { setAccount } = useContext(AccountContext);
  
  // Hook for navigation
  const navigate = useNavigate();

  // State variables for email, password, and controlling the rendering of Signuppage
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [showSignuppage, setShowSignuppage] = useState(false);

  // Function to navigate to the Signuppage component
  const routetosignuppagehandler = () => {
    setShowSignuppage(true);
  }

  // Function to handle the signin process
  const signinhandler = async () => {
    try {
      // Check if both email and password are filled
      if (email && password) {
        // Make a signin API call
        const response = await signin({ email: email, password: password });

        // Handle the API response
        if (response.status === 200) {
          // If signin is successful, set the account in context
          setAccount(response.data);
        }
        if (response.status === 203) {
          // If there is an issue with signin, show a toast notification with the response data
          toast(response.data);
        }
      } else {
        // If email or password is not filled, show a toast notification
        toast("Enter both Email and Password");
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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#00a884] to-[#f0f2f5]">
          <div className="bg-white p-10 rounded-2xl shadow-2xl w-[28rem]">
            <div className="flex justify-center">
              <h2 className="text-2xl font-bold mb-4 ">Login</h2>
            </div>
            {/* Form inputs */}
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-sm font-medium">
                Email Address
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="mt-1 p-2 w-full rounded border focus:outline-none focus:ring focus:border-white"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full rounded border focus:outline-none focus:ring focus:border-white"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            {/* Signin button */}
            <button
              type="submit"
              className="w-full bg-[#008069] text-white p-2 rounded focus:outline-none focus:ring focus:border-white"
              onClick={signinhandler}
            >
              Sign In
            </button>
            {/* Link to go to the Signuppage */}
            <button className="mt-4 text-sm text-center text-medium text-blue-700 " onClick={routetosignuppagehandler}>
              Don't have an account? Sign Up
            </button>
            {/* Toast notifications container */}
            <ToastContainer />
          </div>
        </div>
      )}
    </>
  );
}
