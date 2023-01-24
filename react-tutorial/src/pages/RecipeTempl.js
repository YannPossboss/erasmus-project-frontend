import React,{ useState } from "react";

import Footer from "./pageComponent/Footer";
import ContentBox from "./pageComponent/ContentBox";

import hems from "./pageComponent/ComponentImg/hems.jpg"
import erasmus from "./pageComponent/ComponentImg/img_avatar2.png"

import { useCookies } from "react-cookie";

import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';

import axios from 'axios';

function RecipeTempl(props){
    const navigate = useNavigate()
    const [cookies, setCookie, removeCookie] = useCookies(['name']);

    const [recipeShowNumber, setRecipeShowNumber ] = useState(1);
    const [recipeContent1, setRecipeContent1] = useState({});
    const [recipeContent2, setRecipeContent2] = useState({});
    const [recipeContent3, setRecipeContent3] = useState({});

    
    axios.post('http://localhost:5000/recipe', {recipeId: recipeShowNumber})
        .then(response =>{
            console.log(response)
            setRecipeContent1(response.data)
        })
        .catch(error => {
            console.log(error) 
        })

    axios.post('http://localhost:5000/recipe', {recipeId: recipeShowNumber + 1})
    .then(response =>{
        console.log(response)
        setRecipeContent2(response.data)
    })
    .catch(error => {
        console.log(error) 
    })

    axios.post('http://localhost:5000/recipe', {recipeId: recipeShowNumber + 2})
    .then(response =>{
        console.log(response)
        setRecipeContent3(response.data)
    })
    .catch(error => {
        console.log(error) 
    })

    function onClickHandlerRight(event){
        event.preventDefault();
        if(recipeContent1.length + 2 > recipeShowNumber + 2){
            setRecipeShowNumber(recipeShowNumber + 1)
            console.log(recipeShowNumber);
        }
    }

    function onClickHandlerLeft(event){
        event.preventDefault();
        if(recipeShowNumber > 1){
            setRecipeShowNumber(recipeShowNumber - 1)
        }
        console.log(recipeShowNumber);
    }

    function logout(event){
        event.preventDefault();
        removeCookie("token");
        navigate("/");
    }

    return(
        <div >

                <div class="w3-top">

                    <div class="recipeHeader">

                        <div class="w3-bar w3-theme1" id="myNavbar">

                            <img src={hems} alt="ImgNotFound" class="avatar w3-bar w3-round w3-margin"/>
                            <img src={erasmus} alt="ImgNotFound" class="avatar w3-bar"/>
                            

                            <Link to="/" class="w3-bar-item w3-text-white w3-button w3-red w3-right w3-margin w3-round" onClick={logout}><b>Logout</b></Link>
                            <Link to="/editp" class="w3-bar-item w3-text-white w3-button w3-blue w3-right w3-margin w3-round"><b>Show Profile</b></Link>

                            <buttonp class="w3-button w3-round w3-green" onClick={onClickHandlerLeft} ><b>⬅ Previous Recipe</b></buttonp>
                            <buttonn class="w3-button w3-round w3-green" onClick={onClickHandlerRight}><b>Next Recipe ➡</b></buttonn>
                                
                        </div>
                    
                        <div id="navDemo" class="w3-bar-block w3-theme1 w3-hide w3-hide-large w3-hide-medium">

                            <button class="w3-bar-item w3-text-white w3-button w3-red" onClick={logout}>Logout</button>

                        </div>

                    </div>

                </div>

            <ContentBox recipeContent={recipeContent1}></ContentBox>
            <ContentBox recipeContent={recipeContent2}></ContentBox>
            <ContentBox recipeContent={recipeContent3}></ContentBox>

            <Footer></Footer>

        </div>
    ); 
}

export default RecipeTempl; 