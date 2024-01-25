import React, { useState } from "react";
import { signup } from "../Apiservice/api";
import { useContext } from "react";
import { AccountContext } from "../Contextapi/Accountprovider";
import "./tailwindfile.css";
import Signinpage from "./signinpage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signuppage() {
  // State variables for form inputs
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  // State variable to control rendering of Signinpage component
  const [showSigninPage, setShowSigninPage] = useState(false);

  // Context for managing the user account
  const { setAccount } = useContext(AccountContext);

  // Function to navigate to the Signinpage component
  const gotosigninpagehandler = () => {
    setShowSigninPage(true);
  };

  // Function to handle the signup process
  const signuphandler = async () => {
    try {
      // Check if passwords match
      if (confirmpassword === password) {
        // Make a signup API call
        const response = await signup({
          name: name,
          email: email,
          phonenumber: phonenumber,
          password: password,
        });

        // Handle the API response
        if (response.status === 200) {
          // If signup is successful, set the account in context
          setAccount(response.data);
        }
        if (response.status === 203) {
          // If the user already exists with this email, show a toast notification
          toast("A user with this email already exists. Please sign in.");    
        }
      } else {
        // If passwords don't match, show a toast notification
        toast("Passwords do not match. Please re-enter them carefully.");
      }
    } catch (err) {
      console.log("Error in signup process in Signuppage", err);
    }
  };

  return (
    <>
      {showSigninPage ? (
        <Signinpage />
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#00a884] to-[#f0f2f5]">
          <div className="bg-white py-10 px-[3.5rem] rounded-2xl shadow-2xl w-[35rem]">
            <div className="flex justify-center">
              <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            </div>
            {/* Form inputs */}
            <div className="mb-4">
              <label>Name</label>
              <input
                type="text"
                className="mt-1 p-2 w-full rounded border focus:outline-none focus:ring"
                placeholder="Enter your first name"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label>Email</label>
              <input
                type="email"
                className="mt-1 p-2 w-full rounded border focus:outline-none focus:ring"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label>Phone Number</label>
              <input
                type="String"
                className="mt-1 p-2 w-full rounded border focus:outline-none focus:ring"
                placeholder="Enter your phone number"
                value={phonenumber}
                onChange={(e) => setphonenumber(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label>Password</label>
              <input
                type="password"
                className="mt-1 p-2 w-full rounded border focus:outline-none focus:ring"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label>Confirm Password</label>
              <input
                type="password"
                className="mt-1 p-2 w-full rounded border focus:outline-none focus:ring"
                placeholder="Confirm your password"
                value={confirmpassword}
                onChange={(e) => setconfirmpassword(e.target.value)}
              />
            </div>
            {/* Signup button */}
            <button
              type="submit"
              onClick={signuphandler}
              className="w-full bg-[#00a884] text-white p-2 rounded hover:bg-[#008069] focus:outline-none focus:ring"
            >
              Sign Up
            </button>
            {/* Link to go to the Signinpage */}
            <button className="mt-4 text-sm text-center text-medium text-blue-700" onClick={gotosigninpagehandler}>
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
