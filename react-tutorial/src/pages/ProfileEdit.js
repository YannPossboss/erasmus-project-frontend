import React, { useState } from "react";

import person from "./logo/person.png"
import Footer from "./pageComponent/Footer"; 

import { Link } from 'react-router-dom';
import axios from 'axios';

import { useCookies } from "react-cookie";

function ProfileEdit(props) {
    const [cookies, setCookie, removeCookie] = useCookies(['name']);

    const [role, setRole] = useState("");
    const [username, setUsername] = useState("");
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");
    
    axios.post("http://localhost:5000/secured/user", {token: cookies.token})
    .then(response =>{
        if(response.data.admin === true){
            setRole("Admin");
        }else{
            setRole("User");
        }
        setUsername(response.data.username);
        setCountry(response.data.country);
        setEmail(response.data.email)
    })
    .catch(error => {
        console.log(error)
    })


    return (
        <div>
            
            <div class="w3-top">
                <div class="w3-bar w3-theme1" id="myNavbar">
                <br/>
                <br/>
                </div>
            </div>

            <div class="propic w3-center w3-margin-top">
                <br/>
                <br/>
                <img src={person} alt="peron"/>
                <br/>
                <br/>
                <Link to="/" class="w3-button w3-light-blue">Upload profile picture</Link>
            </div>

            <div class="row">

                    <div class="column1 w3-display-middle-left">

                        <h1 class="w3-margin-left"> Your personal details :</h1>
                        <br/>
                        <h3 class="w3-margin-left">Role:</h3>
                        <h4 class="w3-margin-left">{role}</h4>
                        <br/>
                        <h3 class="w3-margin-left">Username:</h3>
                        <h4 class="w3-margin-left">{username}</h4>
                        <br/>
                        <h3 class="w3-margin-left">Country:</h3>
                        <h4 class="w3-margin-left">{country}</h4>
                        <br/>
                        <h3 class="w3-margin-left">E-mail:</h3>
                        <h4 class="w3-margin-left">{email}</h4>
                        <br/>

                    </div>

                    <div class="column2 w3-center w3-display-middle-right">

                        <h1>Edit personal details : DONT WORK IN THE MOMENT</h1>

                            <br/>
                            <br/>
                            <br/>
                            <br/>

                        <div>
                            <label for="uname"><b>Username</b></label>
                            <br/>
                            <input type="text" placeholder="Enter new Username" name="uname" required/>
                            <br/>
                            <label for="uname"><b>Country</b></label>
                            <br/>
                            <input type="text" placeholder="Enter new Country" name="uname" required/>
                            <br/>
                            <label for="uname"><b>E-mail</b></label>
                            <br/>
                            <input type="text" placeholder="Enter new E-mail" name="uname" required/>
                            <br/>
                            <br/>
                            <br/>
                            <Link to="frgt_pass.html" class="w3-button w3-light-blue"><i class="fa fa-gears w3-margin-right"></i>Change your Password</Link>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>

                    </div>

            </div>
            <Footer></Footer>
        </div>
    );
    
}
export default ProfileEdit;