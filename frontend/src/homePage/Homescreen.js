import './Homescreen.css'
import React, { useState } from 'react';

export default function HomeScreen() {
    const [platform, setPlatform] = useState('');
    const [purpose, setPurpose] = useState('');

    const handlePlatformChange = (event) => {
        console.log(event.target.value);
        setPlatform(event.target.value);
    };

    const handlePurposeChange = (event) => {
        console.log(event.target.value);
        setPurpose(event.target.value);
    };

    const handleSubmit = () => {
        const requestData = {
            prompt: purpose, // Assuming 'purpose' contains the entered prompt
            platform: platform, // Assuming 'selectedPlatform' contains the selected platform value
        };

        fetch('http://http://localhost:3001/gpt2/generateText', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to generate text');
                }
                return response.json();
            })
            .then(data => {
                console.log('Generated Texts:', data);
                // Handle the generated texts as needed
            })
            .catch(error => {
                console.error('Error generating text:', error);
                // Handle error appropriately
            });
    };

    return (
        <div className="home-screen">
            <div className="rectangle-26">
            </div>
            <div className="header">
                <div className="content-craft-ai">
                    ContentCraft.ai
                </div>
                <div className="log-in">
                    Log In
                </div>
                <div className="container-11">
                    <span className="sign-up">
                        Sign Up
                    </span>
                </div>
            </div>
            <div className="container-7">
                <div className="container-10">
                    <div className="container-5">
                        <div className="container-12">
                            <span className="a">
                                A
                            </span>
                        </div>
                        <div className="account">
                            Account
                        </div>
                    </div>
                    <div className="container">
                        <div className="new-chat">
                            New chat
                        </div>
                        <div className="add-to-chat">
                        </div>
                    </div>
                </div>
                <div className="main-heading">
                    <p className="welcome-to-content-craft-ai"><span className='welcome-to- '>Welcome to </span>
                        ContentCraft.ai
                        <span className="welcome-to-content-craft-ai-sub-7"></span>
                    </p>
                    <span className="tailored-for-purpose-perfect-for-engagement">
                        Tailored for Purpose, Perfect for Engagement
                    </span>
                </div>
            </div>
            <div className="container-13">
                <p className="im-your-ai-assistant-here-to-make-creating-engaging-content-for-linked-in-instagram-and-twitter-effortless-just-tell-me-your-purpose-target-audience-and-platform-needs-and-ill-generate-personalized-top-notch-content-for-you-in-no-time">
                    <span> I'm your <span className='orange'> AI assistant</span>, here to make creating <span className='orange'>engaging content</span> for LinkedIn, Instagram, and Twitter effortless. Just tell me your purpose, target audience, and platform needs, and I'll <span className='orange'>generate personalized</span>, top-notch content for you in no time.</span>
                </p>
                <div className="chatbot-1">
                </div>
            </div>
            <div className="container-9">
                <div className="history">
                    History
                </div>
                <div className="all-options">
                    <div className="container-6">
                        <div className="select-platform">
                            Select platform:
                        </div>
                        <div className="container-8">
                            <input type="radio" id="instagram" name="platform" value="instagram" checked={platform === 'instagram'} onChange={handlePlatformChange} />
                            <label htmlFor="instagram" className="instagram">Instagram</label>
                        </div>
                        <div className="container-14">
                            <input type="radio" id="twitter" name="platform" value="twitter" checked={platform === 'twitter'} onChange={handlePlatformChange} />
                            <label htmlFor="twitter" className="twitter">Twitter</label>
                        </div>
                        <div className="container-3">
                            <input type="radio" id="linkedin" name="platform" value="linkedin" checked={platform === 'linkedin'} onChange={handlePlatformChange} />
                            <label htmlFor="linkedin" className="linked-in">LinkedIn</label>
                        </div>
                    </div>

                    <div>
                        <textarea
                            className="container-1"
                            rows="5"
                            cols="30"
                            placeholder="Write your purpose & target audience...."
                            maxLength="750"
                            style={{ width: '100%', maxWidth: '750px', height: '185px' }}
                            value={purpose}
                            onChange={handlePurposeChange}
                        />
                        <div className="enter" onChange={handleSubmit}></div>
                    </div>

                </div>
            </div>
            <div className="line-3">
            </div>
        </div>
    )
}