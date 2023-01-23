import React from "react";

import food from "./ComponentImg/fabada.jpg"
import flag from "./ComponentImg/flag_s_s.png"

function ContentBox(props){

    if(props.recipeContent.test){   
    return(

        <div class="contentboxl">   
                <h2>{props.recipeContent.id} / {props.recipeContent.length}</h2>
                <h1>{props.recipeContent.name}</h1>

                <div class="contentboxtextl">

                    <div class="contentflagl">
                        <img src={flag} alt="RecipePicture_NotAvailable"/>
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <h3>Region: &nbsp; &nbsp;<a href="https://shorturl.at/inrZ0">{props.recipeContent.country}</a></h3>
                    <br/>
                    <h3>Time:   &nbsp; &nbsp; &nbsp; {props.recipeContent.recipetime} ⏱️</h3>
                    <br/>
                </div>

                <img src={food} alt="RecipePicture_NotAvailable"/>

                <div class="contentboxtextl">

                    <h4>{props.recipeContent.describtion}</h4>

                </div>
                
                <div class="contentboxtextl">
                    <h2>Method: </h2>
                    <hr></hr>
                    <h4>{props.recipeContent.task1}</h4>
                    <h4>{props.recipeContent.task2}</h4>
                    <h4>{props.recipeContent.task3}</h4>
                    <h4>{props.recipeContent.task4}</h4>
                    <h4>{props.recipeContent.task5}</h4>
                    <h4>{props.recipeContent.task6}</h4>
                    <h4>{props.recipeContent.task7}</h4>
                    <h4>{props.recipeContent.task8}</h4>
                    <h4>{props.recipeContent.task9}</h4>
                    <h4>{props.recipeContent.task10}</h4>
                </div>

                <div class="contentboxtextl">
                    <h2>Ingredients: </h2>
                    <hr></hr>
                    <h4>{props.recipeContent.ingredient1}</h4>
                    <h4>{props.recipeContent.ingredient2}</h4>
                    <h4>{props.recipeContent.ingredient3}</h4>
                    <h4>{props.recipeContent.ingredient4}</h4>
                    <h4>{props.recipeContent.ingredient5}</h4>
                    <h4>{props.recipeContent.ingredient6}</h4>
                    <h4>{props.recipeContent.ingredient7}</h4>
                    <h4>{props.recipeContent.ingredient8}</h4>
                    <h4>{props.recipeContent.ingredient9}</h4>
                    <h4>{props.recipeContent.ingredient10}</h4>
                    <h4>{props.recipeContent.ingredient11}</h4>
                    <h4>{props.recipeContent.ingredient12}</h4>
                    <h4>{props.recipeContent.ingredient13}</h4>
                    <h4>{props.recipeContent.ingredient14}</h4>
                    <h4>{props.recipeContent.ingredient15}</h4>
                    <h4>{props.recipeContent.ingredient16}</h4>
                    <h4>{props.recipeContent.ingredient17}</h4>
                    <h4>{props.recipeContent.ingredient18}</h4>
                    <h4>{props.recipeContent.ingredient19}</h4>
                    <h4>{props.recipeContent.ingredient20}</h4>
                </div>
                
                

            </div>

            
    );

    }else{
        return(<h1></h1>);
    }
}

export default ContentBox; 