import React from 'react'
//import { Link } from 'react-router-dom';
//import avatar from "../assets/profile.png"

import Styles from "../styles/Username.module.css";

import { useFormik } from 'formik';
import { Toaster } from 'react-hot-toast';

import {passwordResetValidate} from '../helper/validate';

export default function Reset() {

  const formik = useFormik({
    initialValues: {
      password : "admin@123",
      confirm_pwd: "Repeat Password"
    },
    validate : passwordResetValidate,
    validateOnBlur : false,
    validateOnChange : false,
    onSubmit : async values => {
      console.log(values)
    }
  })

  return (
    <div className="container mx-auto">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      
      <div className="flex justify-center items-center h-screen">
        <div className={Styles.glass} style={{width: "50%"}}>

        <div className="title flex flex-col items-center">
          <h4 className="text-5xl font-bold ">Reset</h4>
          <span className="py-4 text-xl w-2/3 text-center text-gray-500"> 
            Enter new password.
          </span>
        </div>

        <form className="pt-20" onSubmit={formik.handleSubmit}>
          
          <div className="textbox flex flex-col items-center gap-6">
            <input {...formik.getFieldProps('password')} className={Styles.textbox} type="text" placeholder="Password"/>
            <input {...formik.getFieldProps('confirm_pwd')} className={Styles.textbox} type="text" placeholder="Repeat Password"/>
            <button className={Styles.btn} type="submit">Reset</button>
          </div>

          
           
        </form>
        
        </div>
      </div>
    </div>

  )
}

