import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglass } from '@fortawesome/free-solid-svg-icons'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { faAllergies } from '@fortawesome/free-solid-svg-icons'


import food from "./ComponentImg/example.png"

import flagS from "./ComponentImg/flag_s_s.png"
import flagT from "./ComponentImg/flag_turkei.png"
import flagG from "./ComponentImg/deutschlandflagge.png"
import flagP from "./ComponentImg/Flag_Poland.png"
import flagR from "./ComponentImg/Flag_Romania.svg.png"

function ContentBox(props){
    let flag;
    if(props.recipeContent.test){   
        if(props.recipeContent.country === "Spain") { flag = flagS; }
        if(props.recipeContent.country === "Türkiye") { flag = flagT; }
        if(props.recipeContent.country === "Germany") { flag = flagG; }
        if(props.recipeContent.country === "Poland") { flag = flagP; }
        if(props.recipeContent.country === "Romania") { flag = flagR; }

        //None in Veg soll erst garnicht angezeigt werden.
        if(props.recipeContent.veg === "none"){
            props.recipeContent.veg = "";
        }
        if(props.recipeContent.imagelink === ""){
            props.recipeContent.imagelink = "Link is not available";
        }


    return(

        <div class="contentboxl">   
                <h2>{props.recipeContent.idNotPrimaryKey} / {props.recipeContent.length}</h2>
                <h1>{props.recipeContent.name}</h1>

                <div class="contentboxtextl">

                    <div class="contentflagl">
                        <img src={flag} alt="RecipePicture_NotAvailable"/>
                    </div>

                    <br/>
                    <br/>
                    <h3>{props.recipeContent.veg}</h3>
                    
                    <br/>
                    <h3>Region: &nbsp; &nbsp;{props.recipeContent.country}</h3>
                    <br/>
                    <h3>Time:   &nbsp; &nbsp; &nbsp; {props.recipeContent.recipetime} <FontAwesomeIcon icon={faHourglass}/> <FontAwesomeIcon icon={faUtensils}/></h3>
                    <br/>
                    <h3>Uploaded by: &nbsp; {props.recipeContent.username}</h3>
                </div>

                <img src={food} alt="RecipePicture_NotAvailable"/>

                <div class="contentboxtextl">
                    <h4>Look up recipe pictures at:</h4>
                    <h4><a href={props.recipeContent.imagelink}>{props.recipeContent.imagelink}</a></h4>
                </div>

                <div class="contentboxtextl">

                    <h4>{props.recipeContent.describtion}</h4>

                </div>
                
                <div class="contentboxtextl">
                    <h2><FontAwesomeIcon icon={faChartSimple}/> Method: </h2>
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
                    <h2><FontAwesomeIcon icon={faList}/> Ingredients: </h2>
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
                
                <div class="contentboxtextl">
                    <h2><FontAwesomeIcon icon={faAllergies}/> Allergenes</h2>
                    <hr></hr>
                    <h4>This recipe contains:</h4>
                    <hr></hr>
                    <h4>{props.recipeContent.alergene1}</h4>
                    <h4>{props.recipeContent.alergene2}</h4>
                    <h4>{props.recipeContent.alergene3}</h4>
                    <h4>{props.recipeContent.alergene4}</h4>
                    <h4>{props.recipeContent.alergene5}</h4>
                    <h4>{props.recipeContent.alergene6}</h4>
                    <h4>{props.recipeContent.alergene7}</h4>
                    <h4>{props.recipeContent.alergene8}</h4>
                    <h4>{props.recipeContent.alergene9}</h4>
                    <h4>{props.recipeContent.alergene10}</h4>
                    <h4>{props.recipeContent.alergene11}</h4>
                    <h4>{props.recipeContent.alergene12}</h4>
                    <h4>{props.recipeContent.alergene13}</h4>
                </div>

            </div>

            
    );

    }
}

export default ContentBox; 