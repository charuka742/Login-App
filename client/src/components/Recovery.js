import React from 'react'
//import { Link } from 'react-router-dom';
//import avatar from "../assets/profile.png";

import Styles from "../styles/Username.module.css";

import { Toaster } from 'react-hot-toast';

export default function Recovery() {


  return (
    <div className="container mx-auto">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      
      <div className="flex justify-center items-center h-screen">
        <div className={Styles.glass}>

        <div className="title flex flex-col items-center">
          <h4 className="text-5xl font-bold ">Recovery</h4>
          <span className="py-4 text-xl w-2/3 text-center text-gray-500"> 
            Enter OTP to Recover the password.
          </span>
        </div>

        <form className="pt-20" >
        

          <div className="textbox flex flex-col items-center gap-6">
            <div className="input text-center">
            <span className="py-4 text-sm text-left text-gray-500">
              Enter 6 Digit OTP sent to you Email Address. 
            </span>
            <input className={Styles.textbox} type="password" placeholder="OTP"/>
        
            </div>
            <button className={Styles.btn} type="submit">Sign in</button>
          </div>

          <div className="text-center py-4">
            <span className="text-gray-500">
              Can't get OTP? <button className="text-red-500" to="/recovery">Resend</button>
            </span>
          </div>
           
        </form>
        
        </div>
      </div>
    </div>

  )
}

