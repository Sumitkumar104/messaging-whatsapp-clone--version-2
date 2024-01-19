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

  const { setAccount } = useContext(AccountContext);
  const navigate = useNavigate();

  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [showSignuppage, setShowSignuppage] = useState(false);

  const routetosignuppagehandler = () => {

    setShowSignuppage(true);

  }

  const signinhandler = async () => {

    try {
      if (email&& password) {

        const response = await signin({ email: email, password: password })

        if (response.status === 200) 
        {
          setAccount(response.data);
        }
        if(response.status===203) {
          toast(response.data)
        }

      }
      else {

        toast("enter both Email and password");

      }
    }
    catch (err) {
      console.log('error in sign in page ', err);
    }

  };



  return (
    <>
      {
        showSignuppage ? (
          <Signuppage />
        ) : (


          <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#00a884] to-[#f0f2f5]">
            <div className="bg-white p-10 rounded-2xl shadow-2xl w-[28rem]">
              <div className="flex justify-center"><h2 className="text-2xl font-bold mb-4 ">Login</h2></div>
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="mt-1 p-2 w-full rounded border  focus:outline-none focus:ring focus:border-white"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}

                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium ">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 p-2 w-full rounded border  focus:outline-none focus:ring focus:border-white"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#008069] text-white p-2 rounded  focus:outline-none focus:ring focus:border-white"
                onClick={signinhandler} >
                Sign In
              </button  >
              <button className="mt-4 text-sm text-center text-medium text-blue-700 " onClick={routetosignuppagehandler} >
                Don't have an account? Sign Up
              </button>
              <ToastContainer />
            </div>
          </div>


        )
      }
    </>
  );
}
