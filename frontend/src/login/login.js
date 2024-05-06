import React, { useState } from 'react';
import './login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = () => {
        const formData = {
            email: email,
            password: password
        };

        // Call your backend API here with formData
        console.log('Form Data:', formData);
        // Example: fetch('your_backend_api_url', { method: 'POST', body: JSON.stringify(formData) })
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error('Error:', error));
    };

    return (
        <div className="login">
            {/* <img className="background" src="assets/vectors/Background_x2.svg" /> */}
            <div className="header">
                <div className="content-craft-ai">
                    ContentCraft.ai
                </div>
                <div className="home">
                    Home
                </div>
                <div className="back-1">
                    <div className="back">
                    </div>
                    <span className="back-2">
                        Back
                    </span>
                </div>
                <div>
                    <span className="sign-up">
                        Sign Up
                    </span>
                </div>
            </div>
            <div className="sign-in-to-account">
                <p className="sign-in-to-your-account">
                    Sign in to your account
                </p>
                <div className="email">
                    Email
                </div>
                <input type="text" className="email-placeholder" value={email} onChange={handleEmailChange} />
                <div className="password">
                    Password
                </div>
                <input type="password" className="password-placeholder" value={password} onChange={handlePasswordChange} />
                <div className="forgot-password">
                    Forgot password?
                </div>
                <div className="container-1">
                    <div className="line-1">
                    </div>
                    <span className="or">
                        OR
                    </span>
                    <div className="line-2">
                    </div>
                </div>
                <div className="container-2">
                    <div className="google">
                    </div>
                    <div className="sign-in-with-google">
                        Sign In with Google
                    </div>
                </div>
                {/* <div className="container">
                    <div className="linked-in">
                    </div>
                    <div className="sign-in-with-linked-in">
                        Sign In with LinkedIn
                    </div>
                </div> */}
                <div className="sign-in" onClick={handleSubmit}>
                    <span className="sign-in-1">
                        Sign In
                    </span>
                </div>
            </div>
        </div>
    );
}
