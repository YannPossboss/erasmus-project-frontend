import React, { useState } from "react";
import axios from 'axios';

import Footer from "./pageComponent/Footer"; 

import erasmus from "./logo/img_avatar2.png";

import {useNavigate} from "react-router-dom";

import {Link} from "react-router-dom";

import { useCookies } from "react-cookie";

import Invalidtxt from "./pageComponent/Invalidtxt";





function Login(props){
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [invalidTEXT, setInvalidTEXT] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['name']);


    //Wenn du eingeloggt bist, wirst du direkt zur Navigation page weitergeleitet
    axios.post("http://erasmus-recipes-backend.herokuapp.com/secured/user", {token: cookies.token})
    .then(response =>{
        console.log(response)
        //Das passiert hier
        navigate("/navigation");
    })
    .catch(error => {
        console.log(error)
    })

    function changeHandlerEmail(event){
        setEmail(event.target.value);
    }

    function changeHandlerPassword(event){
        setPassword(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault()
        let data = {
            emailOrUsername: email,
            password: password
        }
        axios.post('http://erasmus-recipes-backend.herokuapp.com/login', data)
        .then(response =>{
            console.log(response)
            removeCookie("token");
            setCookie("token", response.data, {path: "/"});
            navigate("/navigation");
        })
        .catch(error => {
            console.log(error) 
            setInvalidTEXT(true);
        })
    }


    
    return(
        <div>

            <img src={erasmus} alt="Avatar" class="avatar w3-right w3-hide-middle w3-hide-small"/>

            <div class="center">

                <div class=" w3-center w3-hide-large w3-margin-top">
                    <h1>Login</h1>

                    <Invalidtxt text={"EMAIL or PASSWORD is wrong"} invalidTEXT={invalidTEXT}></Invalidtxt>
                </div>

                <div class="w3-hide-small">
                    <h1>Login</h1>

                    <Invalidtxt text={"EMAIL or PASSWORD is wrong"} invalidTEXT={invalidTEXT}></Invalidtxt>
                </div>

                <form onSubmit={submitHandler}>

                    <div class="txt_field">
                        <input type="text" id="email" name="email" value={email} onChange = {changeHandlerEmail} required/>
                        <span></span>
                        <label>Enter Email or Username</label>
                    </div>

                    <div class="txt_field">
                        <input type="password" id="password" name="password" value={password} onChange = {changeHandlerPassword} required/>
                        <span></span>
                        <label>Enter Password</label>
                    </div>

                    <div class="style2">
                        <input type="submit" value="Login"></input>
                        <Link to="/frgtpass"><input type="submit" value="Forgot Password ?"></input></Link>
                        <Link to="/register"><input type="submit" value="+ Sign up"></input></Link>
                        <Link to="/navigation"><input type="submit" value="Continue without Login"></input></Link>
                    </div>

                </form>
                
            </div>
            
            <Footer></Footer>

        </div>

    );
}

export default Login;