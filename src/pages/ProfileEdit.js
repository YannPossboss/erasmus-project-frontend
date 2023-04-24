import React, { useState } from "react";

import person from "./logo/person.png"
import Footer from "./pageComponent/Footer"; 
import erasmus from "./logo/img_avatar2.png"
import ButtonLogout from "./pageComponent/ButtonLogout";

import { Link } from 'react-router-dom';
import axios from 'axios';

import { useCookies } from "react-cookie";

function ProfileEdit(props) {
    const [cookies, setCookie, removeCookie] = useCookies(['name']);

    const [role, setRole] = useState("");
    const [username, setUsername] = useState("");
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");
    
    axios.post("http://erasmus-recipes-backend.herokuapp.com/secured/user", {token: cookies.token})
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
            
            <div class="w3-top w3-bar w3-theme1 recipeHeader Buttonfix" id="myNavbar">
                <img src={erasmus} alt="Avatar" class="avatar w3-left w3-margin"/>
                <ButtonLogout w3classprops={"w3-center w3-hide-small w3-margin"} typeCustom={"button"}></ButtonLogout>

                <ButtonLogout w3classprops={"w3-right w3-hide-large w3-margin"} typeCustom={"reset"}></ButtonLogout>
            </div>

            <div class="propic w3-center w3-margin-top">
                <br/>
                <br/>
                <br/>
                <img src={person} alt="peron"/>
                <br/>
                <br/>
                <Link to="/editp" class="w3-button w3-light-blue">Upload profile picture (NOT SUPPORTED)</Link>
            </div>

            <div class="row">

                    <div class="column1 w3-left w3-hide-small">

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

                    <div class="column2fix w3-center w3-left w3-hide-large w3-hide-medium">
                        <h1> Your personal details :</h1>
                        <br/>
                        <h3>Role:</h3>
                        <h4>{role}</h4>
                        <br/>
                        <h3>Username:</h3>
                        <h4>{username}</h4>
                        <br/>
                        <h3>Country:</h3>
                        <h4>{country}</h4>
                        <br/>
                        <h3>E-mail:</h3>
                        <h4>{email}</h4>
                        <br/>
                    </div>

                    <div class="column2 w3-center w3-right">

                        <h1>Edit personal details :  <h1 class="w3-red">! FEATURE NOT SUPPORTED YET ! </h1> </h1>

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
                            
                            <div class="style2">
                            
                            <Link to="/editp"><input type="submit" value="Save changes"></input></Link>
                            </div>
                            
                        </div>

                    </div>

            </div>
            <Footer></Footer>
        </div>
    );
    
}
export default ProfileEdit;