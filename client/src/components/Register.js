import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import avatar from "../assets/profile.png"

import Styles from "../styles/Username.module.css";
import convertToBase64 from "../helper/convert"

import { useFormik } from 'formik';
import { Toaster } from 'react-hot-toast';

import {registerFormValidate} from '../helper/validate';

export default function Resigter() {

  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      email : "",
      username : "",
      password : ""

    },
    validate : registerFormValidate,
    validateOnBlur : false,
    validateOnChange : false,
    onSubmit : async values => {
      values = await Object.assign(values, {profile : file || ''})
      console.log(values)
    }
  })

//** formik does not support. */

const onUpload = async e =>{
  const base64 = await convertToBase64(e.target.files[0]);
  setFile(base64);

}
  return (
    <div className="container mx-auto">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      
      <div className="flex justify-center items-center h-screen">
        <div className={Styles.glass} style={{width : "40%", paddingTop: "3em"}}>

        <div className="title flex flex-col items-center">
          <h4 className="text-5xl font-bold ">Register</h4>
          <span className="py-4 text-xl w-2/3 text-center text-gray-500"> 
            Happy to join you.!
          </span>
        </div>

        <form className="py-1" onSubmit={formik.handleSubmit}>
          <div className="profile flex justify-center py-4">
              <label htmlFor="profile"> 
                <img src={file || avatar} className={Styles.profile_pic} alt="avatar"/>
              </label>

              <input onChange={onUpload} type="file" id="profile" name="profile" />
          </div>

          <div className="textbox flex flex-col items-center gap-6">
            <input {...formik.getFieldProps('email')} className={Styles.textbox} type="text" placeholder="abc@gmail.com"/>
            <input {...formik.getFieldProps('username')} className={Styles.textbox} type="text" placeholder="example1*"/>
            <input {...formik.getFieldProps('password')} className={Styles.textbox} type="text" placeholder="admin@123"/>
            <button className={Styles.btn} type="submit">Login in</button>
          </div>

          <div className="text-center py-4">
            <span className="text-gray-500">
              Already Registered? <Link className="text-red-500" to="/">Login Now</Link>
            </span>
          </div>
           
        </form>
        
        </div>
      </div>
    </div>

  )
}


