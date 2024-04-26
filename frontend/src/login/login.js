import './login.css'

export default function Login() {
    return (
        <div className="login">
            <img className="background" src="assets/vectors/Background_x2.svg" />
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
                <div className="sign-up">
                    <span className="sign-up-1">
                        Sign Up
                    </span>
                </div>
            </div>
            <div className="sign-in-to-account">
                <p className="sign-in-to-your-account">
                    <span className="sign-in-to-your-account-sub-1"></span><span></span>
                </p>
                <div className="email">
                    Email
                </div>
                <div className="email-placeholder">
                </div>
                <div className="password">
                    Password
                </div>
                <div className="password-placeholder">
                </div>
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
                <div className="container">
                    <div className="linked-in">
                    </div>
                    <div className="sign-in-with-linked-in">
                        Sign In with LinkedIn
                    </div>
                </div>
                <div className="sign-in">
                    <span className="sign-in-1">
                        Sign In
                    </span>
                </div>
            </div>
        </div>
    )
}