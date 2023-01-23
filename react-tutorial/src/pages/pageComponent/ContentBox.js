import React, { useState } from "react";

import food from "./ComponentImg/fabada.jpg"
import flag from "./ComponentImg/flag_s_s.png"

function ContentBox(){
    

    const [recipeContent, setRecipeContent] = useState({"name":"Fabada", "country":"Spain", "recipetime": "60 min. - 90 min." ,
    "describtion":"Hailing from the Asturia region in northwest Spain, but understandably popular across the whole country, fabada is an incredibly tasty dish considering how simpleit is to make. Good quality chorizo and morcilla is the key to a good fabada, and if you can find cured or smoked pork belly, even better! If using dried white beans, be sure tosoak them overnight before cooking.",
    "task1":"1. Heat a splash of oil in a heavy-based pan and add the chorizo, morcilla and pork belly. Cook until you have a nice colour on the sausages and the fat has started to render from the pork belly",
    "task2": "2. Add the onion and garlic and sauté until soft and translucent",
    "task3": "3. Add the herbs and spices and pour over the stock. Season with salt and pepper",
    "task4": "4. Leave to simmer for 45 minutes, then remove the lid, add the drained beans and simmer for 30 minutes more. Taste to check seasoning",
    "task5": "5. Serve warm with crusty bread",
    "task6": "",
    "task7": "",
    "task8": "",
    "task9": "",
    "task10": "",
    "ingredient1": "4 cooking chorizos",
    "ingredient2": "4 morcilla sausages",
    "ingredient3": "250g of pork belly, sliced into thick lardons",
    "ingredient4": "1 white onion, diced",
    "ingredient5": "2 garlic cloves, sliced",
    "ingredient6": "1 sprig of rosemary",
    "ingredient7": "2 bay leaves",
    "ingredient8": "1 tsp pimentón",
    "ingredient9": "1 pinch of powdered saffron",
    "ingredient10": "600ml of vegetable stock, or water",
    "ingredient11": "400g of white beans, (one tin, drained)",
    "ingredient12": "olive oil",
    "ingredient13": "salt",
    "ingredient14": "pepper",
    "ingredient15": "",
    "ingredient16": "",
    "ingredient17": "",
    "ingredient18": "",
    "ingredient19": "",
    "ingredient20": ""
    });

    
    

    

    return(

        <div class="contentboxl">   
                
                <h1>{recipeContent.name}</h1>

                <div class="contentboxtextl">

                    <div class="contentflagl">
                        <img src={flag} alt="RecipePicture_NotAvailable"/>
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <h3>Region: &nbsp; &nbsp;<a href="https://shorturl.at/inrZ0">{recipeContent.country}</a></h3>
                    <br/>
                    <h3>Time:   &nbsp; &nbsp; &nbsp; {recipeContent.recipetime} ⏱️</h3>
                    <br/>
                </div>

                <img src={food} alt="RecipePicture_NotAvailable"/>

                <div class="contentboxtextl">

                    <h4>{recipeContent.describtion}</h4>

                </div>
                
                <div class="contentboxtextl">
                    <h2>Method: </h2>
                    <hr></hr>
                    <h4>{recipeContent.task1}</h4>
                    <h4>{recipeContent.task2}</h4>
                    <h4>{recipeContent.task3}</h4>
                    <h4>{recipeContent.task4}</h4>
                    <h4>{recipeContent.task5}</h4>
                    <h4>{recipeContent.task6}</h4>
                    <h4>{recipeContent.task7}</h4>
                    <h4>{recipeContent.task8}</h4>
                    <h4>{recipeContent.task9}</h4>
                    <h4>{recipeContent.task10}</h4>
                </div>

                <div class="contentboxtextl">
                    <h2>Ingredients: </h2>
                    <hr></hr>
                    <h4>{recipeContent.ingredient1}</h4>
                    <h4>{recipeContent.ingredient2}</h4>
                    <h4>{recipeContent.ingredient3}</h4>
                    <h4>{recipeContent.ingredient4}</h4>
                    <h4>{recipeContent.ingredient5}</h4>
                    <h4>{recipeContent.ingredient6}</h4>
                    <h4>{recipeContent.ingredient7}</h4>
                    <h4>{recipeContent.ingredient8}</h4>
                    <h4>{recipeContent.ingredient9}</h4>
                    <h4>{recipeContent.ingredient10}</h4>
                    <h4>{recipeContent.ingredient11}</h4>
                    <h4>{recipeContent.ingredient12}</h4>
                    <h4>{recipeContent.ingredient13}</h4>
                    <h4>{recipeContent.ingredient14}</h4>
                    <h4>{recipeContent.ingredient15}</h4>
                    <h4>{recipeContent.ingredient16}</h4>
                    <h4>{recipeContent.ingredient17}</h4>
                    <h4>{recipeContent.ingredient18}</h4>
                    <h4>{recipeContent.ingredient19}</h4>
                    <h4>{recipeContent.ingredient20}</h4>
                </div>
                
                

            </div>

            
    );
}

export default ContentBox; 