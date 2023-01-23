import React,{ useState } from "react";

import Footer from "./pageComponent/Footer";
import ContentBox from "./pageComponent/ContentBox";

import { useCookies } from "react-cookie";

import axios from 'axios';

function RecipeTempl(props){

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
        if(recipeContent1.length > recipeShowNumber + 2){
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

    return(
        <div >

            <div class="w3-center">

                <div class="navigation">
                    <button onClick={onClickHandlerLeft} >←</button>
                    <button onClick={onClickHandlerRight}>→</button>
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