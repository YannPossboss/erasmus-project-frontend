import React from "react";

import Footer from "./pageComponent/Footer";
import ContentBox from "./pageComponent/ContentBox";

function RecipeTempl(props){

    return(
        <div >

            <div class="w3-center">

                <div class="navigation">
                    <button>←</button>
                    <button>→</button>
                </div>

            </div>

            

            <ContentBox></ContentBox>
            <ContentBox></ContentBox>
            <ContentBox></ContentBox>

            <Footer></Footer>

        </div>
    ); 
}

export default RecipeTempl; 