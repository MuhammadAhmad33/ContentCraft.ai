import './Homescreen.css'
import React, { useState } from 'react';

export default function HomeScreen() {
    const [platform, setPlatform] = useState('');
    const [prompt, setPrompt] = useState('');
    const [generatedText, setGeneratedText] = useState([]);

    const handlePlatformChange = (event) => {
        console.log(event.target.value);
        setPlatform(event.target.value);
    };

    const handlePurposeChange = (event) => {
        console.log(event.target.value);
        setPrompt(event.target.value);
    };

    const handleSubmit = async (e) => {
        console.log('start', prompt)
        try {
            const response = await fetch('http://localhost:3001/gpt2/generateText', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });

            if (!response.ok) {
                throw new Error('Failed to generate text');
            }

            const data = await response.json();
            console.log('Raw Response Text:', data);

            // Replace "\n" with new line characters
            const formattedText = data.map(text => text.replaceAll('\\n', '\n'));

            console.log('Formatted Text:', formattedText);

            // Set the formatted text in state
            setGeneratedText(formattedText);
        } catch (error) {
            console.error('Error generating text:', error);
            // Handle error appropriately
        }
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
                    <a href="http://localhost:3000/login">
                        Log In
                    </a>
                </div>

                <div className="container-11">
                    <a href="http://localhost:3000/signup" className="sign-up">
                        Sign Up
                    </a>
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
                            <label htmlFor="linkedin" className="linkedin">LinkedIn</label>
                        </div>
                    </div>

                    <div>
                        <textarea
                            className="container-1"
                            rows="5"
                            cols="30"
                            placeholder="Write your purpose & target audience...."
                            maxLength="750"
                            style={{
                                width: '100%', maxWidth: '750px', height: '185px', color: '#949494', fontSize: '14px', fontFamily: 'Arial, Helvetica, sans-serif'
                            }}
                            value={prompt}
                            onChange={handlePurposeChange}
                        />
                        <button className="enter" onClick={handleSubmit}></button>
                    </div>
                </div>
            </div>
            <div className="line-3">
            </div>
            <div className="response-container">
                <span><b>Generated Content:</b><br /><br /></span>
                <div className="generated-text">
                    {generatedText.map((text, index) => (
                        <div key={index}>
                            <p><b>Generated Content {index + 1}:</b></p>
                            <p>{text.replace(/\n/g, '\n')}</p>
                        </div>
                    ))}
                </div>
            </div>



        </div>
    )
}
