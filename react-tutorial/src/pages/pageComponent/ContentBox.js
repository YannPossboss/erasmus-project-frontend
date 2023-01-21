import React from "react";

import food from "./ComponentImg/fabada.jpg"
import flag from "./ComponentImg/flag_s_s.png"

function ContentBox(){
    return(

        <div class="contentboxl">   

                <h1>Fabada</h1>

                <div class="contentboxtextl">

                    <div class="contentflagl">
                        <img src={flag} alt="RecipePicture_NotAvailable"/>
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <h3>Region: &nbsp; &nbsp;<a href="https://shorturl.at/inrZ0">Spain</a></h3>
                    <br/>
                    <h3>Time:   &nbsp; &nbsp; &nbsp; 60 min. - 90 min. ⏱️</h3>
                    <br/>
                </div>

                <img src={food} alt="RecipePicture_NotAvailable"/>

                <div class="contentboxtextl">

                    <h4>
                        Hailing from the Asturia region in northwest Spain, 
                        but understandably popular across the whole country, 
                        fabada is an incredibly tasty dish considering how simple
                        it is to make. Good quality chorizo and morcilla is the key
                        to a good fabada, and if you can find cured or smoked pork 
                        belly, even better! If using dried white beans, be sure to
                        soak them overnight before cooking.
                    </h4>

                </div>
                
                <div class="contentboxtextl">
                    <h2>Method: </h2>
                    <hr></hr>
                    <h4>1.
                            Heat a splash of oil in a heavy-based pan and add the chorizo,
                            morcilla and pork belly. Cook until you have a nice colour on 
                            the sausages and the fat has started to render from the 
                            pork belly</h4>
                    <h4>2.
                            Add the onion and garlic and sauté until soft and translucent</h4>
                    <h4>3.
                            Add the herbs and spices and pour over the stock. Season with
                            salt and pepper</h4>
                    <h4>4.
                            Leave to simmer for 45 minutes, then remove the lid, add the
                            drained beans and simmer for 30 minutes more. Taste to check seasoning</h4>
                    <h4>5.
                            Serve warm with crusty bread</h4>
                </div>

                <div class="contentboxtextl">
                    <h2>Ingredients: </h2>
                    <hr></hr>
                    <h4>· 4 cooking chorizos</h4>
                    <h4>· 4 morcilla sausages</h4>
                    <h4>· 250g of pork belly, sliced into thick lardons</h4>
                    <h4>· 1 white onion, diced</h4>
                    <h4>· 2 garlic cloves, sliced</h4>
                    <h4>· 1 sprig of rosemary</h4>
                    <h4>· 2 bay leaves</h4>
                    <h4>· 1 tsp pimentón</h4>
                    <h4>· 1 pinch of powdered saffron</h4>
                    <h4>· 600ml of vegetable stock, or water</h4>
                    <h4>· 400g of white beans, (one tin, drained)</h4>
                    <h4>· olive oil</h4>
                    <h4>· salt</h4>
                    <h4>· pepper</h4>
                </div>
            </div>
    );
}

export default ContentBox; 