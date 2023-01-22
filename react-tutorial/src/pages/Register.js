import React, { useState } from "react";
import axios from 'axios';

import erasmus from "./logo/img_avatar2.png"
import hems from "./logo/hems.jpg"

import { Link } from 'react-router-dom';

import {useNavigate} from "react-router-dom";

function Register(props){
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [admin, setAdmin] = useState("");
    
    

    function changeHandlerEmail(event){
        setEmail(event.target.value);
    }

    function changeHandlerPassword(event){
        setPassword(event.target.value);
    }

    function changeHandlerAdmin(event){
        setAdmin(event.target.value);
    }
    

    function submitHandler(event){
        event.preventDefault()
        let data = {
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
        })
    }

    return(
        <div>   

            <div class="w3-top">
                <div class="w3-bar w3-theme1" id="myNavbar">
                <Link to="/login" class="w3-bar-item w3-text-white w3-button w3-green">Go to Login</Link>
                <Link to="/impress" class="w3-bar-item w3-button w3-text-white w3-right w3-dark-gray">Legal notice</Link>
                </div>
            </div>


            <div class="imgcontainer w3-hide-small">
                <img src={erasmus} alt="Avatar" class="avatar"/>
                <img src={hems} alt="Avatar2" class="avatar"/>
            </div>

            <div class="center">

            <div class=" w3-center w3-hide-large w3-margin-top">
                <img src={erasmus} alt="Avatar" class="avatar"/>
                <img src={hems} alt="Avatar2" class="avatar"/>

                <h1>Registration</h1>
            </div>

            <div class="w3-hide-small">

            <h1>Registration</h1>
            </div>

                <form onSubmit={submitHandler}>

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

                    <div class="place_hold">
                        <br/>
                    </div>

                    <div class="text_field">
                        <label>Admin Account Key*</label>
                        <input type="text" id="admin" name="admin" value={admin} onChange = {changeHandlerAdmin}/>
                    </div>

                    <br/>

                    <div class="style2">
                        <input type="submit" value="Register Account"/>
                    </div>

                    <div class="signup_link"> <h6> fields with * are not required </h6> </div>
                </form>

            </div>

            <div class="footer">

                <p>&copy; 2019 | 2022 HEMS | Erasmus+ Demo </p>

            </div>

        </div>
    );
    
}

export default Register;