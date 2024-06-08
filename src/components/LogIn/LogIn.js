import * as loginstyle from './login-style';
import logo from './Assets/logo.svg';
import maillogo from './Assets/mail.svg';
import leftimg from './Assets/leftimg.svg';
import rightimg from './Assets/rightimg.svg';
import OTPInput from 'react-otp-input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Home from '../Home/Home';
import { Link } from 'react-router-dom';

const LogIn = () => {

    // class Login extends React.Component{
    //     render(){

    const navigate = useNavigate();

    const [otp, setOtp] = useState('');

    function sendOTP() {
        const mail = document.getElementById('email').value;
        if (mail === null || !mail.includes("@") || mail.includes(" ") || !mail.includes('.')) {
            alert("Enter a valid email id!");
        }
        else {
            document.getElementById('text').innerHTML = "OTP sent to " + mail;
            const btn1 = document.getElementById('OTPbtn');
            btn1.style.display = "none";
            const rect = document.getElementById('ToEnterEmail');
            rect.style.display = "none";
            const btn2 = document.getElementById('loginbtn');
            btn2.style.display = "inline";
            const otp = document.getElementById('ToEnterOTP');
            otp.style.display = "inline";
        }
    }
    function handleSubmit() {
        // <Link to = {Home}>Home</Link>
        // <Home/>
    navigate('/home');
}

return (
    <loginstyle.LogInPage>

        <loginstyle.LogInOrientation>

            <img src={logo} />

            <h1>Welcome back!</h1>

            <p id="text">Please enter your details to log into the account</p>

            <loginstyle.Rect id="ToEnterEmail">
                <loginstyle.Icon src={maillogo} />
                <loginstyle.Email type="email" placeholder='Enter your email...' id="email" required />
            </loginstyle.Rect>

            <loginstyle.ButtonOTP
                id="OTPbtn"
                onClick={sendOTP}
            >Get OTP</loginstyle.ButtonOTP>

            <loginstyle.ToEnter id='ToEnterOTP'>

                <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderSeparator={<span style={{ width: "25px" }} />}
                    renderInput={(props) => <input{...props} />}
                    inputStyle={{
                        border: "1px solid #D8D8D8",
                        borderRadius: "6px",
                        width: "54px",
                        height: "54px",
                        fontSize: "12px",
                        color: "#000",
                        fontWeight: "400"
                    }}
                    focusStyle={{
                        border: "1px solid #CFD3DB",
                        outline: "none"
                    }}
                />
            </loginstyle.ToEnter>

            <loginstyle.ButtonV
                id="loginbtn"
                onClick={handleSubmit}
            >Login</loginstyle.ButtonV>

        </loginstyle.LogInOrientation>

        <loginstyle.LeftImage src={leftimg} />

        <loginstyle.RightImage src={rightimg} />

    </loginstyle.LogInPage>
);
    //     }
    // }

}

export default LogIn;