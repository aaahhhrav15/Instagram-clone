import React from "react";
import { useState,useEffect } from "react";
import "../styles/signup.css";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const notifyA = (err)=> toast.error(err);
    const notifyB = (suc)=> toast.success(suc);

    const regexEmail =/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

    const postData = ()=>{
        if(!regexEmail.test(email))
        {
            notifyA("Invalid email");
            return;
        }
        else if(!regexPass.test(password))
        {
            notifyA("Password must contain eight characters, at least one letter, one number and one special character");
            return;
        }

        fetch("http://localhost:5001/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:name,
                username:username,
                email:email,
                password:password
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error)
            {
                notifyA(data.error);
            }
            else
            {
                notifyB(data.message);
                navigate("/signin");
            }
            console.log(data)})
    }

    return (
        <div className="signup">
            <div className="form-container">
                <form action="" className="form">
                    <img src={logo} alt="" className="signUpLogo" />
                    <p className="loginPara">
                        Sign up to see photos and videos <br /> from your friends
                    </p>
                    <input type="email" name="email" placeholder="Email" value={email} className="input" onChange={(event)=>{
                        setEmail(event.target.value);
                    }}/>
                    <input type="text" name="fullname" placeholder="Full Name" value={name} className="input" onChange={(event)=>{
                        setName(event.target.value);
                    }}/>
                    <input type="text" name="username" placeholder="Username" value={username} className="input" onChange={(event)=>{
                        setUsername(event.target.value);
                    }}/>
                    <input type="password" name="password" autoComplete="on" placeholder="Password" value={password} className="input" onChange={(event)=>{
                        setPassword(event.target.value);
                    }}/>
                    <p className="terms">
                        By signing up, you agree to out Terms, <br /> privacy policy and
                        cookies policy.
                    </p>
                    <input type="submit" value={"Sign Up"} className="signUpButton" onClick={(event)=>{
                        event.preventDefault();
                        postData();
                    }}/>
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
