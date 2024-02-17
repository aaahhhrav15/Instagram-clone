import React from "react";
import "../styles/signup.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="signup">
            <div className="form-container">
                <form action="" className="form">
                    <img src={logo} alt="" className="signUpLogo" />
                    <p className="loginPara">
                        Sign up to see photos and videos <br /> from your friends
                    </p>
                    <input type="email" name="email" placeholder="Email" className="input"/>
                    <input type="text" name="fullname" placeholder="Full Name" className="input"/>
                    <input type="text" name="username" placeholder="Username" className="input"/>
                    <input type="password" name="password" placeholder="Password" className="input"/>
                    <p className="terms">
                        By signing up, you agree to out Terms, <br /> privacy policy and
                        cookies policy.
                    </p>
                    <input type="submit" value={"Sign Up"} className="signUpButton"/>
                </form>
                <div className="form2">
                    <p>
                        Already have an account?
                    </p>
                    <Link to={"/Signin"} style={{color:"purple"}}>Sign In</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
