import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from "react-cookie";
import {useNavigate} from "react-router-dom";

import Footer from "./pageComponent/Footer"; 

function AdminPost(props){
    const navigate = useNavigate()

    const [vercode, setVercode] = useState("");
    const [cookies] = useCookies(['name']);

    function submitHandler(event){
        axios.post('http://erasmus-recipes-backend.herokuapp.com/secured/admincreatecode', {"vercode": vercode, token: cookies.token})
        .then(response =>{
            console.log(response)
            setVercode("");
        })
        .catch(error => {
            console.log(error) 
            navigate("/navigation")
        })
    }

    function changeHandlerVercode(event){
        setVercode(event.target.value);
    }
    

    return(
        <div>
            <h1 class="w3-center w3-black">This page is only for authorised stuff members from HEMS</h1>

            <form onSubmit={submitHandler}>

            <div class="center">
                
                <div class="txt_field">
                    
                    <input type="text" id="vercode" name="vercode" value={vercode} onChange = {changeHandlerVercode} required/>
                    <span></span>
                    <label>Eingabefeld</label>
                    <span></span>
                </div>

                <div class="style2">
                    <input type="submit" value="An die API senden"></input>
                    <span></span>
                    <br/>
                    <br/>
                </div>

            </div>


            </form>

            <Footer/>
        </div>
    );
}

export default AdminPost;