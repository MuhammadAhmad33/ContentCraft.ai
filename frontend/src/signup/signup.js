import React, { useState } from 'react';
import './signup.css'; // Assuming you have the CSS file with the necessary styles
import { useNavigate } from 'react-router-dom';


export default function Signup() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle the form submission, e.g., send signup data to the server
        try {
          const response = await fetch('http://localhost:3001/gpt2/createUser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username,email,password}),
            
          });
          console.log(response)
          if (response.ok) {
            console.log('logged');
    
            const data = await response.json();
            console.log(data)
            // Store token and user information in localStorage
            if (data.access_token) {
              // Store token and user information in localStorage
              localStorage.setItem('token', data.access_token);
              // localStorage.setItem('userId', data.id);
            // localStorage.setItem('username', data.username);
    
            // Navigate to the home page or another route
            navigate('/homescreen');} // Adjust the route as needed
            window.location.reload();
    
          } else {
            // Handle authentication error
            console.error('Authentication failed');
          }
        } catch (error) {
          console.error('Error during authentication:', error);
        }
    }

    return (
        <div className="login">
            <div className="header2">
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
                    <span className="sign-up2">
                        Sign In
                    </span>
                </div>
            </div>
            <div className="sign-in-to-account">
                <p className="sign-in-to-your-account">
                    Sign up for an account
                </p>
                <div className="email">
                    Email
                </div>
                <input type="text" className="email-placeholder" value={email} onChange={handleEmailChange} />
                <div className="username">
                    Username
                </div>
                <input type="text" className="username-placeholder" value={username} onChange={handleUsernameChange} />
                <div className="password">
                    Password
                </div>
                <input type="password" className="password-placeholder" value={password} onChange={handlePasswordChange} />
                <div className="" onClick={handleSubmit}>
                    <span className="signin2">
                        Sign Up
                    </span>
                </div>
            </div>
        </div>
    );
}
