import React from "react";
import "../styles/signup.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Signin = () => {
    return (
        <div className="signup">
            <div className="form-container">
                <form action="" className="form">
                    <img src={logo} alt="" className="signUpLogo" />
                    <input type="email" name="email" placeholder="Email" className="input"/>
                    <input type="password" name="password" placeholder="Password" className="input"/>
                    <input type="submit" value={"Sign In"} className="signUpButton"/>
                </form>
                <div className="form2">
                    <p>
                        Don't have an account?
                    </p>
                    <Link to={"/Signup"} style={{color:"purple"}}>Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Signin;
