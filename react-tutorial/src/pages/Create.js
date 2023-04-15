import React, { useState } from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { useCookies } from "react-cookie";

import Footer from "./pageComponent/Footer"; 
import ButtonLogout from "./pageComponent/ButtonLogout";
import ButtonProfile from "./pageComponent/ButtonProfile";

import erasmus from "./logo/img_avatar2.png"

function Create(props){
    const navigate = useNavigate()
    const [cookies, removeCookie] = useCookies(['name']);
    
    const [recipeContent, setRecipeContent] = useState({
        "name":"", "country":"Spain", "recipetime": "", "describtion":"", 
        "task1":"",
        "task2": "",
        "task3": "",
        "task4": "",
        "task5": "",
        "task6": "",
        "task7": "",
        "task8": "",
        "task9": "",
        "task10": "",
        "ingredient1": "",
        "ingredient2": "",
        "ingredient3": "",
        "ingredient4": "",
        "ingredient5": "",
        "ingredient6": "",
        "ingredient7": "",
        "ingredient8": "",
        "ingredient9": "",
        "ingredient10": "",
        "ingredient11": "",
        "ingredient12": "",
        "ingredient13": "",
        "ingredient14": "",
        "ingredient15": "",
        "ingredient16": "",
        "ingredient17": "",
        "ingredient18": "",
        "ingredient19": "",
        "ingredient20": ""
        });

    function changeHandlerName(event) { setRecipeContent( {...recipeContent, name:event.target.value}); }
    function changeHandlerCountry(event) { setRecipeContent( {...recipeContent, country:event.target.value}); }
    function changeHandlerRecipetime(event) { setRecipeContent( {...recipeContent, recipetime:event.target.value}); }   
    function changeHandlerDescribtion(event) { setRecipeContent( {...recipeContent, describtion:event.target.value}); } 
    function changeHandlerTask1(event) { setRecipeContent( {...recipeContent, task1:event.target.value}); }
    function changeHandlerTask2(event) { setRecipeContent( {...recipeContent, task2:event.target.value}); }
    function changeHandlerTask3(event) { setRecipeContent( {...recipeContent, task3:event.target.value}); }
    function changeHandlerTask4(event) { setRecipeContent( {...recipeContent, task4:event.target.value}); }
    function changeHandlerTask5(event) { setRecipeContent( {...recipeContent, task5:event.target.value}); }
    function changeHandlerTask6(event) { setRecipeContent( {...recipeContent, task6:event.target.value}); }
    function changeHandlerTask7(event) { setRecipeContent( {...recipeContent, task7:event.target.value}); }
    function changeHandlerTask8(event) { setRecipeContent( {...recipeContent, task8:event.target.value}); }
    function changeHandlerTask9(event) { setRecipeContent( {...recipeContent, task9:event.target.value}); }
    function changeHandlerTask10(event) { setRecipeContent( {...recipeContent, task10:event.target.value}); }
    function changeHandlerIngredient1(event) { setRecipeContent( {...recipeContent, ingredient1:event.target.value}); }
    function changeHandlerIngredient2(event) { setRecipeContent( {...recipeContent, ingredient2:event.target.value}); }
    function changeHandlerIngredient3(event) { setRecipeContent( {...recipeContent, ingredient3:event.target.value}); }
    function changeHandlerIngredient4(event) { setRecipeContent( {...recipeContent, ingredient4:event.target.value}); }
    function changeHandlerIngredient5(event) { setRecipeContent( {...recipeContent, ingredient5:event.target.value}); }
    function changeHandlerIngredient6(event) { setRecipeContent( {...recipeContent, ingredient6:event.target.value}); }
    function changeHandlerIngredient7(event) { setRecipeContent( {...recipeContent, ingredient7:event.target.value}); }
    function changeHandlerIngredient8(event) { setRecipeContent( {...recipeContent, ingredient8:event.target.value}); }
    function changeHandlerIngredient9(event) { setRecipeContent( {...recipeContent, ingredient9:event.target.value}); }
    function changeHandlerIngredient10(event) { setRecipeContent( {...recipeContent, ingredient10:event.target.value}); }
    function changeHandlerIngredient11(event) { setRecipeContent( {...recipeContent, ingredient11:event.target.value}); }
    function changeHandlerIngredient12(event) { setRecipeContent( {...recipeContent, ingredient12:event.target.value}); }
    function changeHandlerIngredient13(event) { setRecipeContent( {...recipeContent, ingredient13:event.target.value}); }
    function changeHandlerIngredient14(event) { setRecipeContent( {...recipeContent, ingredient14:event.target.value}); }
    function changeHandlerIngredient15(event) { setRecipeContent( {...recipeContent, ingredient15:event.target.value}); }
    function changeHandlerIngredient16(event) { setRecipeContent( {...recipeContent, ingredient16:event.target.value}); }
    function changeHandlerIngredient17(event) { setRecipeContent( {...recipeContent, ingredient17:event.target.value}); }
    function changeHandlerIngredient18(event) { setRecipeContent( {...recipeContent, ingredient18:event.target.value}); }
    function changeHandlerIngredient19(event) { setRecipeContent( {...recipeContent, ingredient19:event.target.value}); }
    function changeHandlerIngredient20(event) { setRecipeContent( {...recipeContent, ingredient20:event.target.value}); }

    function submit(event){
        event.preventDefault();
        axios.post("http://10.142.242.78:5000/secured/create", {...recipeContent, token: cookies.token})
        .then(response =>{
            navigate("/navigation");
        })
        .catch(error => {
            console.log(error)
        })
    }

    function logout(event){
        event.preventDefault();
        removeCookie("token");
        navigate("/");
    }

    return(
        <div>

            <div class="w3-top recipeHeader w3-bar w3-theme1 Buttonfix">
                     
                     <img src={erasmus} alt="Avatar" class="avatar w3-left w3-margin"/>
                     <ButtonLogout w3classprops={"w3-center w3-hide-small w3-margin"} typeCustom={"button"} logout={logout} ></ButtonLogout>
                     <ButtonProfile w3classprops={"w3-center w3-hide-small w3-margin"} typeCustom={"button"}></ButtonProfile>
 
                     <ButtonLogout w3classprops={"w3-center w3-hide-large w3-margin-top"} typeCustom={"reset"} logout={logout} ></ButtonLogout>
                     <ButtonProfile w3classprops={"w3-center w3-hide-large w3-margin-top"} typeCustom={"reset"} ></ButtonProfile>
            </div>

            <div class="centerupdate w3-hide-large w3-hide-medium">
                <h1>Create new Recipe</h1>

                <form onSubmit={submit} >
                    <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerName} required/>
                            <span></span>
                            <label >Recipe Name *</label>
                        </div>

                        <div class="w3-center w3-dropdown-hover">

                                <h8>Where does the Recipe come from?  </h8>

                                <select class="drop w3-center" id="country" name="country" onChange={changeHandlerCountry} required>
                                <option value="Spain">Spain</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Romania">Romania</option>
                                <option value="Poland">Poland</option>
                                <option value="Germany">Germany</option>
                                </select>
                                
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerRecipetime} required/>
                            <span></span>
                            <label>Preparation Time</label>
                        </div>

                        <textarea placeholder="A brief description of the Recipe:" onChange={changeHandlerDescribtion} required></textarea>

                        <h1>Tasklist: </h1>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerTask1} required/>
                            <span></span>
                            <label >Task 1: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerTask2} required/>
                            <span></span>
                            <label >Task 2: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerTask3} required/>
                            <span></span>
                            <label >Task 3: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerTask4} required/>
                            <span></span>
                            <label >Task 4: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerTask5} required/>
                            <span></span>
                            <label >Task 5: </label>
                        </div>

                        <h4>Not Required: </h4>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerTask6} />
                            <span></span>
                            <label >Task 6: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerTask7} />
                            <span></span>
                            <label >Task 7: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerTask8} />
                            <span></span>
                            <label >Task 8: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerTask9} />
                            <span></span>
                            <label >Task 9: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerTask10} />
                            <span></span>
                            <label >Task 10: </label>
                        </div>

                        <h1>Ingredient List: </h1>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient1} required/>
                            <span></span>
                            <label >Ingredient 1: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient2} required/>
                            <span></span>
                            <label >Ingredient 2: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient3} required/>
                            <span></span>
                            <label >Ingredient 3: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient4} required/>
                            <span></span>
                            <label >Ingredient 4: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient5} required/>
                            <span></span>
                            <label >Ingredient 5: </label>
                        </div>

                        <h4>Not Required: </h4>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient6} />
                            <span></span>
                            <label >Ingredient 6: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient7} />
                            <span></span>
                            <label >Ingredient 7: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient8} />
                            <span></span>
                            <label >Ingredient 8: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient9} />
                            <span></span>
                            <label >Ingredient 9: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient10} />
                            <span></span>
                            <label >Ingredient 10: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient11} />
                            <span></span>
                            <label >Ingredient 11: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient12} />
                            <span></span>
                            <label >Ingredient 12: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient13} />
                            <span></span>
                            <label >Ingredientk 13: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient14} />
                            <span></span>
                            <label >Ingredient 14: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient15} />
                            <span></span>
                            <label >Ingredient 15: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient16} />
                            <span></span>
                            <label >Ingredient 16: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient17} />
                            <span></span>
                            <label >Ingredient 17: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient18} />
                            <span></span>
                            <label >Ingredient 18: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient19} />
                            <span></span>
                            <label >Ingredient 19: </label>
                        </div>

                        <div class="txt_field marginbottom">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient20} />
                            <span></span>
                            <label >Ingredient 20: </label>
                        </div>

                        <div class="style2">
                            <input type="submit" value="+ Upload to server"></input>
                            <Link to="/navigation"><input type="submit" value="Cancel"></input></Link>
                        </div>

                        <div class="w3-margin-bottom">
                            <br></br>
                        </div>
                </form>

            </div>

            <div class="centerupload w3-hide-small w3-hide-medium">

                <form onSubmit={submit} >

                    <div class="w3-left">

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerName} required/>
                            <span></span>
                            <label >Recipe Name *</label>
                        </div>

                        <div class="w3-center w3-dropdown-hover">

                                <h8>Where does the Recipe come from?  </h8>

                                <select class="drop w3-center" id="country" name="country" onChange={changeHandlerCountry} required>
                                <option value="Spain">Spain</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Romania">Romania</option>
                                <option value="Poland">Poland</option>
                                <option value="Germany">Germany</option>
                                </select>
                                
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerRecipetime} required/>
                            <span></span>
                            <label>Preparation Time</label>
                        </div>

                        <textarea placeholder="A brief description of the Recipe:" onChange={changeHandlerDescribtion} required></textarea>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerTask1} required/>
                            <span></span>
                            <label >Task 1: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerTask2} required/>
                            <span></span>
                            <label >Task 2: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerTask3} required/>
                            <span></span>
                            <label >Task 3: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerTask4} required/>
                            <span></span>
                            <label >Task 4: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerTask5} required/>
                            <span></span>
                            <label >Task 5: </label>
                        </div>

                        <h4>Not Required: </h4>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerTask6} />
                            <span></span>
                            <label >Task 6: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerTask7} />
                            <span></span>
                            <label >Task 7: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerTask8} />
                            <span></span>
                            <label >Task 8: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerTask9} />
                            <span></span>
                            <label >Task 9: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerTask10} />
                            <span></span>
                            <label >Task 10: </label>
                        </div>

                        <div class="w3-margin-bottom">
                            <br></br>
                        </div>

                        <div class="style2">
                            <input type="submit" value="+ Upload to server"></input>
                            <Link to="/navigation"><input type="submit" value="Cancel"></input></Link>
                        </div>
                    </div>

                    <div class="w3-right">
                        
                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient1} required/>
                            <span></span>
                            <label >Ingredient 1: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient2} required/>
                            <span></span>
                            <label >Ingredient 2: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient3} required/>
                            <span></span>
                            <label >Ingredient 3: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient4} required/>
                            <span></span>
                            <label >Ingredient 4: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient5} required/>
                            <span></span>
                            <label >Ingredient 5: </label>
                        </div>

                        <h4>Not Required: </h4>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient6} />
                            <span></span>
                            <label >Ingredient 6: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient7} />
                            <span></span>
                            <label >Ingredient 7: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient8} />
                            <span></span>
                            <label >Ingredient 8: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient9} />
                            <span></span>
                            <label >Ingredient 9: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient10} />
                            <span></span>
                            <label >Ingredient 10: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient11} />
                            <span></span>
                            <label >Ingredient 11: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient12} />
                            <span></span>
                            <label >Ingredient 12: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient13} />
                            <span></span>
                            <label >Ingredientk 13: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient14} />
                            <span></span>
                            <label >Ingredient 14: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient15} />
                            <span></span>
                            <label >Ingredient 15: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient16}/>
                            <span></span>
                            <label >Ingredient 16: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient17} />
                            <span></span>
                            <label >Ingredient 17: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient18}/>
                            <span></span>
                            <label >Ingredient 18: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient19}/>
                            <span></span>
                            <label >Ingredient 19: </label>
                        </div>

                        <div class="txt_field marginbottom">
                            <input type="text" id="" name="" onChange={changeHandlerIngredient20}/>
                            <span></span>
                            <label >Ingredient 20: </label>
                        </div>

                        <div class="w3-margin-bottom">
                            <br></br>
                            <br></br>
                        </div>

                    </div>

                </form>
            </div>
            <Footer></Footer>
        </div>
    );

}

export default Create; 