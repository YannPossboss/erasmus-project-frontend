import React, { useState } from "react";


import { Link } from 'react-router-dom';

import { useCookies } from "react-cookie";
import axios from "axios";

function ButtonProfile(props){
    const [logedin, setLogedin ] = useState(true)
    const [cookies] = useCookies(['name']);

    axios.post("http://erasmus-recipes-backend.herokuapp.com/secured/user", {token: cookies.token})
    .then(response =>{
        setLogedin(true);
    })
    .catch(error => {
        setLogedin(false);
    })
    
    if(logedin){
    return(
            <Link to="/editp" ><input type={props.typeCustom} value="Profile" class={props.w3classprops}></input></Link>
        );
    }
}

export default ButtonProfile; 