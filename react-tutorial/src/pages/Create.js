import React, { useState } from "react";
import axios from 'axios';
import {Link} from "react-router-dom";

import Footer from "./pageComponent/Footer"; 
import ButtonLogout from "./pageComponent/ButtonLogout";
import ButtonProfile from "./pageComponent/ButtonProfile";

import erasmus from "./logo/img_avatar2.png"

function Create(props){

    return(
        <div>

            <div class="w3-top recipeHeader w3-bar w3-theme1 Buttonfix">
                     
                     <img src={erasmus} alt="Avatar" class="avatar w3-left w3-margin"/>
                     <ButtonLogout w3classprops={"w3-center w3-hide-small w3-margin"} typeCustom={"button"} ></ButtonLogout>
                     <ButtonProfile w3classprops={"w3-center w3-hide-small w3-margin"} typeCustom={"button"}></ButtonProfile>
 
                     <ButtonLogout w3classprops={"w3-center w3-hide-large w3-margin-top"} typeCustom={"reset"} ></ButtonLogout>
                     <ButtonProfile w3classprops={"w3-center w3-hide-large w3-margin-top"} typeCustom={"reset"} ></ButtonProfile>
            </div>

            <div class="centerupdate w3-hide-large w3-hide-medium">
                <h1>Create new Recipe</h1>

                <form>
                    <div class="txt_field">
                            <input type="text" id="" name="" required/>
                            <span></span>
                            <label >Recipe Name *</label>
                        </div>

                        <div class="w3-center w3-dropdown-hover">

                                <h8>Where does the Recipe come from?  </h8>

                                <select class="drop w3-center" id="country" name="country" required>
                                <option value="Spain">Spain</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Romania">Romania</option>
                                <option value="Poland">Poland</option>
                                <option value="Germany">Germany</option>
                                </select>
                                
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" required/>
                            <span></span>
                            <label>Preparation Time - ( in min. ) *</label>
                        </div>

                        <textarea placeholder="A brief description of the Recipe:"></textarea>

                        <h1>Tasklist: </h1>

                        <div class="txt_field">
                            <input type="text" id="" name="" required/>
                            <span></span>
                            <label >Task 1: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" required/>
                            <span></span>
                            <label >Task 2: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" required/>
                            <span></span>
                            <label >Task 3: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" required/>
                            <span></span>
                            <label >Task 4: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" required/>
                            <span></span>
                            <label >Task 5: </label>
                        </div>

                        <h4>Not Required: </h4>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Task 6: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Task 7: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Task 8: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Task 9: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Task 10: </label>
                        </div>

                        <h1>Ingredient List: </h1>

                        <div class="txt_field">
                            <input type="text" id="" name="" required/>
                            <span></span>
                            <label >Ingredient 1: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" required/>
                            <span></span>
                            <label >Ingredient 2: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" required/>
                            <span></span>
                            <label >Ingredient 3: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" required/>
                            <span></span>
                            <label >Ingredient 4: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" required/>
                            <span></span>
                            <label >Ingredient 5: </label>
                        </div>

                        <h4>Not Required: </h4>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Ingredient 6: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Ingredient 7: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Ingredient 8: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Ingredient 9: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Ingredient 10: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Ingredient 11: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Ingredient 12: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Ingredientk 13: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Ingredient 14: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Ingredient 15: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Ingredient 16: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Ingredient 17: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Ingredient 18: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Ingredient 19: </label>
                        </div>

                        <div class="txt_field marginbottom">
                            <input type="text" id="" name=""/>
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

                <form>

                    <div class="w3-left">

                        <div class="txt_field">
                            <input type="text" id="" name="" required/>
                            <span></span>
                            <label >Recipe Name *</label>
                        </div>

                        <div class="w3-center w3-dropdown-hover">

                                <h8>Where does the Recipe come from?  </h8>

                                <select class="drop w3-center" id="country" name="country" required>
                                <option value="Spain">Spain</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Romania">Romania</option>
                                <option value="Poland">Poland</option>
                                <option value="Germany">Germany</option>
                                </select>
                                
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" required/>
                            <span></span>
                            <label>Preparation Time - ( in min. ) *</label>
                        </div>

                        <textarea placeholder="A brief description of the Recipe:"></textarea>

                        <div class="txt_field">
                            <input type="text" id="" name="" required/>
                            <span></span>
                            <label >Task 1: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" required/>
                            <span></span>
                            <label >Task 2: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" required/>
                            <span></span>
                            <label >Task 3: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" required/>
                            <span></span>
                            <label >Task 4: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" required/>
                            <span></span>
                            <label >Task 5: </label>
                        </div>

                        <h4>Not Required: </h4>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Task 6: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Task 7: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Task 8: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Task 9: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
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
                            <input type="text" id="" name="" required/>
                            <span></span>
                            <label >Ingredient 1: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" required/>
                            <span></span>
                            <label >Ingredient 2: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" required/>
                            <span></span>
                            <label >Ingredient 3: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" required/>
                            <span></span>
                            <label >Ingredient 4: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name="" required/>
                            <span></span>
                            <label >Ingredient 5: </label>
                        </div>

                        <h4>Not Required: </h4>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Ingredient 6: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Ingredient 7: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Ingredient 8: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Ingredient 9: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Ingredient 10: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Ingredient 11: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Ingredient 12: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Ingredientk 13: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Ingredient 14: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Ingredient 15: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Ingredient 16: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Ingredient 17: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Ingredient 18: </label>
                        </div>

                        <div class="txt_field">
                            <input type="text" id="" name=""/>
                            <span></span>
                            <label >Ingredient 19: </label>
                        </div>

                        <div class="txt_field marginbottom">
                            <input type="text" id="" name=""/>
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