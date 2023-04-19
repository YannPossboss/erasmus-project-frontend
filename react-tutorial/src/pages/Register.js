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
    const [admin, setAdmin] = useState("");
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

    function changeHandlerAdmin(event){
        setAdmin(event.target.value);
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
            admin: admin
        }
        axios.post('http://localhost:5000/register', data)
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

                    <Invalidtxt text={"This Email or Username is allready in use or check your verificationcode"} invalidTEXT={invalidTEXT}></Invalidtxt>
                </div>

                <div class="w3-hide-small">
                    <h1>Registration</h1>

                    <Invalidtxt text={"This Email or Username is allready in use or check your verificationcode"} invalidTEXT={invalidTEXT}></Invalidtxt>
                </div>

                <form onSubmit={submitHandler}>

                    <div class="txt_field">
                        <input type="text" id="username" name="username" value={username} onChange = {changeHandlerUsername} required/>
                        <span></span>
                        <label>Set Username</label>
                    </div>

                    <div class="txt_field">
                        <input type="text" id="email" name="email" value={email} onChange = {changeHandlerEmail} required/>
                        <span></span>
                        <label>Set Email</label>
                    </div>

                    <div class="txt_field">
                        <input type="password" id="password" name="password" value={password} onChange = {changeHandlerPassword} required/>
                        <span></span>
                        <label>Set Password</label>
                    </div>

                    <div class="txt_field">
                        <input type="text" id="admin" name="admin" value={admin} onChange = {changeHandlerAdmin} required/>
                        <span></span>
                        <label>Enter Verification Code</label>
                    </div>

                    <div class="w3-center w3-dropdown-hover">

                                <h8>Choose your country : </h8>

                                <select class="drop w3-center" id="country" name="country" onChange={changeHandlerCountry}>
                                <option value="Spain">Spain</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Romania">Romania</option>
                                <option value="Poland">Poland</option>
                                <option value="Germany">Germany</option>
                                </select>
                                
                    </div>

                    <div class="style2">
                        <input type="submit" value="Register Account"/>
                        <Link to="/login"><input type="submit" value="Cancel"/></Link>
                    </div>

                </form>
            </div>
            <Footer></Footer>
        </div>
    );
    
}

export default Register;