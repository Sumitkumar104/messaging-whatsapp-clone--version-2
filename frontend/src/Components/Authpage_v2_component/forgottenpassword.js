import React, { useState } from 'react'
import "./ForgetPassword.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { forgottenpassword } from '../Apiservice/api'
import { useNavigate} from "react-router-dom";





const ForgetPassword = (email) => {

   const navigate = useNavigate();

   const emaill=email;

    const [password, setpassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    let myInput = document.getElementById("password");
    let letter = document.getElementById("letter");
    let capital = document.getElementById("capital");
    let number = document.getElementById("number");
    let length = document.getElementById("length");
    let specialchar = document.getElementById("specialch");

    const focus = () => {
        document.getElementById("message").style.display = "block";
    }


    const blur = () => {
        document.getElementById("message").style.display = "none";
    }

    const keyup = () => {

        let lowerCaseLetters = /[a-z]/g;
        if (myInput.value.match(lowerCaseLetters)) {
            letter.classList.remove("invalid");
            letter.classList.add("valid");
        } else {
            letter.classList.remove("valid");
            letter.classList.add("invalid");
        }

        let upperCaseLetters = /[A-Z]/g;
        if (myInput.value.match(upperCaseLetters)) {
            capital.classList.remove("invalid");
            capital.classList.add("valid");
        } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        }

        let numbers = /[0-9]/g;
        if (myInput.value.match(numbers)) {
            number.classList.remove("invalid");
            number.classList.add("valid");
        } else {
            number.classList.remove("valid");
            number.classList.add("invalid");
        }

        let special = /[@#$&^!*.~`/?,+-_=()<>]/g;
        if (myInput.value.match(special)) {
            specialchar.classList.remove("invalid");
            specialchar.classList.add("valid");
        }
        else {
            specialchar.classList.remove("valid");
            specialchar.classList.add("invalid");
        }
        if (myInput.value.length >= 8) {
            length.classList.remove("invalid");
            length.classList.add("valid");
        } else {
            length.classList.remove("valid");
            length.classList.add("invalid");
        }
    }

    const changePasswordhandler = async () => {
        if (confirmpassword === password)
        {
            let result=forgottenpassword({email:emaill,password:confirmpassword})

            if(result.success===true){
            navigate("/");
            alert('Password changed succesfully')
            }

        }
        else
            document.getElementById('ForgetpaswPage_error').innerHTML = 'Passwords are not matching'
    }


    return (
        <div className="ForgetpaswPage_container">
            <div className='ForgetpaswPage_inner_container'>
                <h1 className='ForgetpaswPage_title'>
                    Choose new password
                </h1>
                <p>Almost done.Enter your new password and youre all set.</p>
                <form onSubmit={changePasswordhandler}>
                    <div className='ForgetpaswPage_input_title'>New password</div>
                    <input className='ForgetpaswPage_input' type="password" id="password" name="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Enter your password' onClick={focus} onBlur={blur} onKeyUp={keyup} pattern="((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})" title="Must contain at least one number , one uppercase and lowercase letter,one special character and at least 8 or more characters" required="required" />
                    <div className='ForgetpaswPage_input_title'>New password</div>
                    <input className='ForgetpaswPage_input' type="password" name="password" required="required" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} placeholder='Re-enter your password' />
                    <h3 className='ForgetpaswPage_instructions'>Password must contain the following:</h3>
                    <div id="message">

                        <p id="letter" class="invalid"><FontAwesomeIcon className="ForgetpaswPage_icon" icon={faCircleCheck} />one lowercase letter</p>
                        <p id="capital" class="invalid"><FontAwesomeIcon className="ForgetpaswPage_icon" icon={faCircleCheck} />one capital uppercase letter</p>
                        <p id="number" class="invalid"><FontAwesomeIcon className="ForgetpaswPage_icon" icon={faCircleCheck} />one number</p>
                        <p id="length" class="invalid"><FontAwesomeIcon className="ForgetpaswPage_icon" icon={faCircleCheck} />Minimum 8 characters</p>
                        <p id="specialch" class="invalid"><FontAwesomeIcon className="ForgetpaswPage_icon" icon={faCircleCheck} />one special char characters</p>
                    </div>
                    <button className='ForgetpaswPage_button' >Reset Password</button>
                    <p id='ForgetpaswPage_error'></p>
                </form>
            </div>
            {/* <div className='ForgetpaswPage_goto_loginpage'><FontAwesomeIcon icon={faArrowLeft} />Back to Login</div> */}

        </div>
    )
}

export default ForgetPassword