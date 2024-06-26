import * as loginstyle from './login-style';
import logo from './Assets/logo.svg';
import maillogo from './Assets/mail.svg';
import leftimg from './Assets/leftimg.svg';
import rightimg from './Assets/rightimg.svg';
import OTPInput from 'react-otp-input';
import { useState } from 'react';
import Home from '../Home/Home';

const LogIn = () => {
    const [otp, setOtp] = useState('');
    const [email, setEmail] = useState('');
    const sendOTP = async () => {
        try {
            const response = await fetch('http://localhost:3000/data/send-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
            if (!response.ok) {throw new Error(await response.text());}
            else {
                document.getElementById('text').innerHTML = ("OTP Sent to " + email);
                const btn1 = document.getElementById('OTPbtn');
                btn1.style.display = "none";
                const rect = document.getElementById('ToEnterEmail');
                rect.style.display = "none";
                const btn2 = document.getElementById('loginbtn');
                btn2.style.display = "inline";
                const btn3 = document.getElementById('goback');
                btn3.style.display = "inline";
                const otp = document.getElementById('ToEnterOTP');
                otp.style.display = "inline";
            }
        } catch (error) {alert(JSON.parse(error.message).message)}
    }
    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:3000/data/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp })
            });
            if (!response.ok) { throw new Error(await response.text()); }
            else {
                const result = await response.json();
                const token = result.token;
                const name = result.name;
                const occupation = result.occupation;
                localStorage.setItem('token', token)
                localStorage.setItem('name', name)
                localStorage.setItem('occupation', occupation)
                { <Home /> }
                window.location.reload();
            }
        } catch (error) { alert(JSON.parse(error.message).message)}
    }
    const handleBack = async () => { window.location.reload(); }
    return (
        <loginstyle.LogInPage>
            <loginstyle.LogInOrientation>
                <img src={logo} alt="logo" />
                <h1>Welcome back!</h1>
                <p id="text">Please enter your details to log into the account</p>
                <loginstyle.Rect id="ToEnterEmail">
                    <loginstyle.mail src={maillogo} />
                    <loginstyle.Email type="email" placeholder='Enter your email...' id="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} required />
                </loginstyle.Rect>
                <loginstyle.ButtonOTP id="OTPbtn" onClick={sendOTP}>Get OTP</loginstyle.ButtonOTP>
                <loginstyle.ToEnter id='ToEnterOTP'>
                    <OTPInput
                        value={otp}
                        onChange={setOtp}
                        required
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
                        focusStyle={{ border: "1px solid #CFD3DB", outline: "none" }} />
                </loginstyle.ToEnter>
                <loginstyle.ButtonV id="loginbtn" onClick={handleSubmit}>Login</loginstyle.ButtonV>
                <loginstyle.ButtonV id="goback" onClick={handleBack}>Go Back</loginstyle.ButtonV>
            </loginstyle.LogInOrientation>
            <loginstyle.LeftImage src={leftimg} />
            <loginstyle.RightImage src={rightimg} />
        </loginstyle.LogInPage>
    );
}
export default LogIn;