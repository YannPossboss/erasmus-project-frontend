import React, { useState } from "react";
import axios from 'axios';

import erasmus from "./logo/img_avatar2.png"
import Footer from "./pageComponent/Footer";

import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";

import Invalidtxt from "./pageComponent/Invalidtxt";

function Register(props){
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState("");
    const [verification, setVerification] = useState("");
    const [country, setCountry] = useState("Spain");
    
    const [invalidTEXT, setInvalidTEXT] = useState(false);
    
    
    function changeHandlerUsername(event){
        setUsername(event.target.value); 
    }

    function changeHandlerEmail(event){
        setEmail(event.target.value);
    }

    function changeHandlerPassword(event){
        setPassword(event.target.value);
    }

    function changeHandlerVerification(event){
        setVerification(event.target.value);
    }

    function changeHandlerCountry(event){
        setCountry(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault()
        let data = {
            country: country,
            username: username,
            email: email,
            password: password,
            verification: verification
        }
        axios.post('https://erasmus-recipes-backend.herokuapp.com/register', data)
        .then(response =>{
            console.log(response)
            navigate("/login")
        })
        .catch(error => {
            console.log(error)
            setInvalidTEXT(true);
        })
    }

    return(
        <div>   
            
            <img src={erasmus} alt="Avatar" class="avatar w3-right w3-hide-medium w3-hide-small"/>

            <div class="center">

                <div class=" w3-center w3-hide-large w3-hide-medium w3-margin-top">
                    <h1>Registration</h1>

                    <Invalidtxt text={"This e-mail or username is allready in use or check your verificationcode"} invalidTEXT={invalidTEXT}></Invalidtxt>
                </div>

                <div class="w3-hide-small">
                    <h1>Registration</h1>

                    <Invalidtxt text={"This e-mail or username is allready in use or check your verificationcode"} invalidTEXT={invalidTEXT}></Invalidtxt>
                </div>

                <form onSubmit={submitHandler}>

                    <div class="txt_field">
                        <input type="text" id="username" name="username" value={username} onChange = {changeHandlerUsername} required/>
                        <span></span>
                        <label>Set username</label>
                    </div>

                    <div class="txt_field">
                        <input type="text" id="email" name="email" value={email} onChange = {changeHandlerEmail} required/>
                        <span></span>
                        <label>Set e-mail</label>
                    </div>

                    <div class="txt_field">
                        <input type="password" id="password" name="password" value={password} onChange = {changeHandlerPassword} required/>
                        <span></span>
                        <label>Set password</label>
                    </div>

                    <div class="txt_field">
                        <input type="text" id="verification" name="verification" value={verification} onChange = {changeHandlerVerification} required/>
                        <span></span>
                        <label>Enter verification code</label>
                    </div>

                    <div class="w3-center w3-dropdown-hover">

                                <h8>Choose your country : </h8>

                                <select class="drop w3-center" id="country" name="country" onChange={changeHandlerCountry}>
                                <option value="Spain">Spain</option>
                                <option value="Türkiye">Türkiye</option>
                                <option value="Romania">Romania</option>
                                <option value="Poland">Poland</option>
                                <option value="Germany">Germany</option>
                                </select>
                                
                    </div>

                    <div class="style2">
                        <input type="submit" value="Register account"/>
                        <Link to="/login"><input type="submit" value="Cancel"/></Link>
                    </div>

                </form>
            </div>
            <Footer></Footer>
        </div>
    );
    
}

export default Register;