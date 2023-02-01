import React from "react";

import Footer from "./pageComponent/Footer"; 

import erasmus from "./logo/img_avatar2.png"

import { Link } from 'react-router-dom';

import {useNavigate} from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

function Navigation(props){
    const navigate = useNavigate()
    const [cookies] = useCookies(['name']);
    
    function LoginTest(event){
        event.preventDefault();
        axios.post("http://localhost:5000/secured/user", {token: cookies.token})
        .then(response =>{
            console.log(response)
            navigate("/create");
        })
        .catch(error => {
            console.log(error)
            navigate("/login")
        })
    }
        
    
        return (
            <div>
                
                <div class="w3-top headernew">
                     
                    <img src={erasmus} alt="Avatar" class="avatar w3-right"/>

                </div>

                <div class="w3-center margintop">
                    <h1>Erasmus Recipes.</h1>
                    <h2>On this website you can exchange your Recipies with others arround the World. </h2>
                </div>

                <div class="landingnew w3-hide-small">
                    <Link to="/login" onClick={LoginTest}><input type="submit" value="Create new Recipe +"/></Link>
                    <Link to="/recipe"><input type="submit" value="Show me some Recipes !"/></Link>
                </div>

                <div class="w3-hide-middle w3-hide-large">
                    <Link to="/login"><input type="submitNavi" value="Create new Recipe +"/></Link>
                    <Link to="/recipe"><input type="submitNavi" value="Show me some Recipes !"/></Link>
                </div>
                <Footer></Footer>
            </div>
        );
    
}

export default Navigation;