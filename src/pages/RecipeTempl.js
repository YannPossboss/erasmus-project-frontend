import React,{ useState } from "react";

import Footer from "./pageComponent/Footer";
import ContentBox from "./pageComponent/ContentBox";
import ButtonProfile from "./pageComponent/ButtonProfile";
import ButtonLogout from "./pageComponent/ButtonLogout.js";
import Search from "./pageComponent/Search.js";
 
import erasmus from "./pageComponent/ComponentImg/img_avatar2.png"; 

import { useCookies } from "react-cookie";

import {useNavigate} from "react-router-dom";


import axios from 'axios';

function RecipeTempl(props){
    const navigate = useNavigate()
    const [cookies, setCookie, removeCookie] = useCookies(['name']);

    const [recipeShowNumber, setRecipeShowNumber ] = useState(1);
    const [recipeShowNumberUpdate, setRecipeShowNumberUpdate ] = useState(0);
    const [recipeContent1, setRecipeContent1] = useState({});
    const [recipeContent2, setRecipeContent2] = useState({});
    const [recipeContent3, setRecipeContent3] = useState({});

    const [searchText, setSearchText] = useState("");
    const [updatedSearchText, setUpdatedSearchText] = useState("");
    const [SearchTextUpdate, setSearchTextUpdate] = useState("");

    if(recipeShowNumberUpdate !== recipeShowNumber || SearchTextUpdate !== updatedSearchText){
        setRecipeShowNumberUpdate(recipeShowNumber);
        setSearchTextUpdate(updatedSearchText);
        axios.post('https://erasmus-recipes-backend.herokuapp.com/recipe', {recipeId: recipeShowNumber, search: updatedSearchText})
            .then(response =>{
                console.log(response)
                setRecipeContent1(response.data)
            })
            .catch(error => {
                console.log(error) 
            })

        axios.post('https://erasmus-recipes-backend.herokuapp.com/recipe', {recipeId: recipeShowNumber + 1, search: updatedSearchText})
        .then(response =>{
            console.log(response)
            setRecipeContent2(response.data)
        })
        .catch(error => {
            console.log(error) 
        })

        axios.post('https://erasmus-recipes-backend.herokuapp.com/recipe', {recipeId: recipeShowNumber + 2, search: updatedSearchText})
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
            setRecipeShowNumber(recipeShowNumber + 1);
            console.log(recipeShowNumber);
        }
    }

    function onClickHandlerLeft(event){
        event.preventDefault();
        if(recipeShowNumber > 1){
            setRecipeShowNumber(recipeShowNumber - 1);
        }
        console.log(recipeShowNumber);
    }

    function logout(event){
        event.preventDefault();
        removeCookie("token");
        navigate("/");
    }

    function searchButton(event){
        event.preventDefault();
        setUpdatedSearchText(searchText);
        setRecipeShowNumber(1);
    }

    function searchOnChange(event){
        event.preventDefault();
        setSearchText(event.target.value);
    }


    return(
        <div >
            
                <div class="w3-top">

                    <div class="recipeHeader">

                        <div class="w3-bar w3-theme1" id="myNavbar">

                            <div class="Buttonfix">
                                
                                <ButtonLogout logout={logout} w3classprops={"w3-center w3-hide-small"} typeCustom={"button"} ></ButtonLogout>
                                <ButtonProfile w3classprops={"w3-center w3-hide-small"} typeCustom={"button"} ></ButtonProfile>
                                
                                <Search w3classprops={"w3-hide-small w3-right"} searchButton={searchButton} searchOnChange={searchOnChange} searchText={searchText}></Search>

                                <input type="button" class="w3-center w3-hide-small" value=" ➡ " onClick={onClickHandlerRight}></input>
                                <input type="button" class="w3-center w3-hide-small" value=" ⬅ " onClick={onClickHandlerLeft}></input>
                                    
                                <img src={erasmus} alt="ImgNotFound" class="avatar w3-bar w3-margin w3-hide-small" />

                                <div class="w3-hide-large ">
                                    <img src={erasmus} alt="ImgNotFound" class="avatar w3-bar w3-margin w3-hide-large" />

                                    <ButtonProfile w3classprops={"w3-center w3-hide-large w3-margin-top w3-top"} typeCustom={"reset"} ></ButtonProfile>
                                    <ButtonLogout logout={logout} w3classprops={"w3-center w3-hide-large w3-right w3-margin "} typeCustom={"reset"} ></ButtonLogout>
                                    
                                    <div>
                                        <input type="reset" class="w3-center w3-hide-large w3-right w3-margin-right w3-margin-bottom"value="Next"  onClick={onClickHandlerRight}></input>
                                        <input type="reset" class="w3-center w3-hide-large w3-left w3-margin-left" value="Back" onClick={onClickHandlerLeft}></input>
                                        <Search w3classprops={"w3-right"} searchButton={searchButton} searchOnChange={searchOnChange} searchText={searchText}></Search>
                                    </div>

                                    

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