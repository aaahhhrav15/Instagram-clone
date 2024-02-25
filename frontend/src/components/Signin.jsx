import React from "react";
import { useState} from "react";
import "../styles/signup.css";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const notifyA = (err)=> toast.error(err);
    const notifyB = (suc)=> toast.success(suc);

    const regexEmail =/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    const postData = ()=>{
        if(!regexEmail.test(email))
        {
            notifyA("Invalid email");
            return;
        }

        fetch("http://localhost:5001/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
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
                navigate("/profile");
            }
            console.log(data)})
    }

    return (
        <div className="signup">
            <div className="form-container">
                <form action="" className="form">
                    <img src={logo} alt="" className="signUpLogo" />
                    <input type="email" name="email" placeholder="Email" className="input" onChange={(event)=>{
                        setEmail(event.target.value);
                    }} />
                    <input type="password" name="password" placeholder="Password" className="input" onChange={(event)=>{
                        setPassword(event.target.value);
                    }}/>
                    <input type="submit" value={"Sign In"} className="signUpButton" onClick={(event)=>{
                        event.preventDefault();
                        postData();
                    }}/>
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
