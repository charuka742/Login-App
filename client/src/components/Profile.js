import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import avatar from "../assets/profile.png"

import Styles from "../styles/Username.module.css";
import extend from "../styles/Profile.module.css";

import convertToBase64 from "../helper/convert"

import { useFormik } from 'formik';
import { Toaster } from 'react-hot-toast';

import {profileValidate} from '../helper/validate';

export default function Profile() {

  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      firstName : "",
      lastName : "",
      email : "",
      mobileNo : "",
      address : ""

    },
    validate : profileValidate,
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
        <div className={`${Styles.glass} ${extend.glass}`} style={{width : "40%", paddingTop: "3em"}}>

        <div className="title flex flex-col items-center">
          <h4 className="text-5xl font-bold ">Profile</h4>
          <span className="py-4 text-xl w-2/3 text-center text-gray-500"> 
            You can update the details.!
          </span>
        </div>

        <form className="py-1" onSubmit={formik.handleSubmit}>
          <div className="profile flex justify-center py-4">
              <label htmlFor="profile"> 
                <img src={file || avatar} className={`${Styles.profile_pic} ${extend.profile_pic}`} alt="avatar"/>
              </label>

              <input onChange={onUpload} type="file" id="profile" name="profile" />
          </div>

          <div className="textbox flex flex-col items-center gap-6">
            <div className="name flex w-3/4 gap-10">
              <input {...formik.getFieldProps('firstName')} className={`${Styles.textbox} ${extend.textbox}`} type="text" placeholder="firstName"/>
              <input {...formik.getFieldProps('lastName')} className={`${Styles.textbox} ${extend.textbox}`} type="text" placeholder="lastName"/>

            </div>

            <div className="name flex w-3/4 gap-10">
              <input {...formik.getFieldProps('mobileNo')} className={`${Styles.textbox} ${extend.textbox}`} type="text" placeholder="mobile"/>
              <input {...formik.getFieldProps('email')} className={`${Styles.textbox} ${extend.textbox}`} type="text" placeholder="email"/>

            </div>
              <input {...formik.getFieldProps('address')} className={`${Styles.textbox} ${extend.textbox}`} type="text" placeholder="address"/>
              <button className={Styles.btn} type="save">Update</button>
          
          </div>

          <div className="text-center py-4">
            <span className="text-gray-500">
              Come Back Later? <Link className="text-red-500" to="/">LogOut</Link>
            </span>
          </div>
           
        </form>
        
        </div>
      </div>
    </div>

  )
}


