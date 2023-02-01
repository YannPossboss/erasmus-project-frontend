import React,{ useState } from "react";

import Footer from "./pageComponent/Footer";
import ContentBox from "./pageComponent/ContentBox";
import ButtonProfile from "./pageComponent/ButtonProfile";
import ButtonLogout from "./pageComponent/ButtonLogout.js";
 
import erasmus from "./pageComponent/ComponentImg/img_avatar2.png"; 

import { useCookies } from "react-cookie";

import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';

import axios from 'axios';

function RecipeTempl(props){
    const navigate = useNavigate()
    const [cookies, setCookie, removeCookie] = useCookies(['name']);

    const [recipeShowNumber, setRecipeShowNumber ] = useState(1);
    const [recipeShowNumberUpdate, setRecipeShowNumberUpdate ] = useState(0);
    const [recipeContent1, setRecipeContent1] = useState({});
    const [recipeContent2, setRecipeContent2] = useState({});
    const [recipeContent3, setRecipeContent3] = useState({});

    if(recipeShowNumberUpdate != recipeShowNumber){
        setRecipeShowNumberUpdate(recipeShowNumber);
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

    }

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

                            <div class="Buttonfix">
                                <img src={erasmus} alt="ImgNotFound" class="avatar w3-bar w3-margin w3-hide-small" />
 
                                <ButtonLogout logout={logout}></ButtonLogout>
                                <ButtonProfile></ButtonProfile>
                                
                                <input type="button" class="w3-center w3-hide-small" value=" ➡ " onClick={onClickHandlerRight}></input>
                                <input type="button" class="w3-center w3-hide-small" value=" ⬅ " onClick={onClickHandlerLeft}></input>
                                    
                                <div class="w3-hide-large">
                                    <img src={erasmus} alt="ImgNotFound" class="avatar w3-bar w3-margin w3-hide-large" />

                                    <Link to="/" onClick={logout}><input type="reset" class="w3-center w3-hide-large" value="Logout" onClick={logout}></input></Link>
                                    <Link to="/editp"><input type="reset" class="w3-center w3-hide-large" value="Profile"></input></Link>
                                    
                                    <input type="reset" class="w3-center w3-hide-large w3-right w3-margin-right w3-margin-bottom"value="Next"  onClick={onClickHandlerRight}></input>
                                    <input type="reset" class="w3-center w3-hide-large w3-left w3-margin-left" value="Back" onClick={onClickHandlerLeft}></input>

                                </div>

                            </div>        

                        </div>

                    </div>
                    
                </div>

            <ContentBox recipeContent={recipeContent1}></ContentBox>

            <div class="w3-hide-small">
                <ContentBox recipeContent={recipeContent2}></ContentBox>
                <ContentBox recipeContent={recipeContent3}></ContentBox>

            </div>

            <Footer></Footer>

        </div>
    ); 
}

export default RecipeTempl; 