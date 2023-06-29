import React from "react";

import Footer from "./pageComponent/Footer"; 

import erasmus from "./logo/img_avatar2.png"

import { Link } from 'react-router-dom';

import {useNavigate} from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import ButtonLogout from "./pageComponent/ButtonLogout";
import ButtonProfile from "./pageComponent/ButtonProfile";

function Navigation(props){
    const navigate = useNavigate()
    const [cookies, removeCookie] = useCookies(['name']);
    
    function LoginTest(event){
        event.preventDefault();
        axios.post("https://erasmus-recipes-backend.herokuapp.com/secured/user", {token: cookies.token})
        .then(response =>{
            console.log(response)
            navigate("/create");
        })
        .catch(error => {
            console.log(error)
            navigate("/login")
        })
    }
    function logout(event){
        event.preventDefault();
        removeCookie("token");
        navigate("/");
    }
    
    
        return (
            <div>
                
                <div class="w3-top recipeHeader w3-bar w3-theme1 Buttonfix">
                     
                    <img src={erasmus} alt="Avatar" class="avatar w3-left w3-margin"/>
                    <ButtonLogout w3classprops={"w3-center w3-hide-small w3-margin"} typeCustom={"button"} logout={logout}></ButtonLogout>
                    <ButtonProfile w3classprops={"w3-center w3-hide-small w3-margin"} typeCustom={"button"}></ButtonProfile>

                    <ButtonLogout w3classprops={"w3-center w3-hide-large w3-margin-top"} typeCustom={"reset"} logout={logout}></ButtonLogout>
                    <ButtonProfile w3classprops={"w3-center w3-hide-large w3-margin-top"} typeCustom={"reset"} ></ButtonProfile>
                </div>

                <div class="w3-center margintop">
                    <h1>Erasmus recipes.</h1>
                    <h2>On this website you can exchange your recipes with others around the world. </h2>
                </div>

                <div class="landingnew w3-hide-small">
                    <Link to="/login" onClick={LoginTest}><input type="submit" value="Create new recipe +"/></Link>
                    <Link to="/recipe"><input type="submit" value="Show me some recipes !"/></Link>
                </div>

                <div class="w3-hide-middle w3-hide-large">
                    <Link to="/login" onClick={LoginTest}><input type="submitNavi" value="Create new recipe +"/></Link>
                    <Link to="/recipe"><input type="submitNavi" value="Show me some recipes !"/></Link>
                </div>
                <Footer></Footer>
            </div>
        );
    
}

export default Navigation;