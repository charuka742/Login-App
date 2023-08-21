import {toast} from 'react-hot-toast';

/**validate login page username*/
export async function usernameValidate(values){
    const errors = usernameVerify({}, values);
    
    return errors;
}

/**validate login page Password*/
export async function passwordValidate(values){
    const errors = passwordVerify({}, values);

    return errors;
}

export async function passwordResetValidate(values){
    const errors = passwordVerify({}, values);

    if(values.password !== values.confirm_pwd){
        errors.exist = toast.errors("Entered password is exist.!")
    }

    return errors;
}

export async function profileValidate(values){
    const errors = emailVerify({}, values);
    return errors;
}


/** validate Register form*/
export async function registerFormValidate(values){
    const errors = usernameVerify({}, values);
    passwordVerify(errors, values);
    emailVerify(errors, values);
    
    return errors;
}

/*******************************************/

/** validate usename*/
function passwordVerify(errors = {}, values){

    const specialChars = /[`!#@$%^&*()_+-=[\]{};':"\\|,.<>/?~]/;

    if(!values.password){
        errors.password = toast.error("Password Required...!");
    }else if(values.password.includes(" ")){
        errors.password = toast.error("Wrong Password...!"); 
    }else if(values.password.length < 4){
        errors.password = toast.error("Password must be more than 4 charactor long.");
    }else if(!specialChars.test(values.password)){
        errors.password = toast.error("Password must have a special charactor.!");
    }

    return errors;
}


/** validate usename*/
function usernameVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error('Username Required..!')
    }else if(values.username.includes(" ")){
        error.username = toast.error('Invalid Username...!')
    }

    return error;
}

function emailVerify(error = {}, values){
    if(!values.email){
        error.email = error.toast("Email Required...!")
    }else if(values.email.includes(" ")){
        error.email = error.toast("Wrong Email...!")
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email = error.toast("Invalid Email Adress...!")
    }

    return error;
}