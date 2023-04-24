import React, { useState } from "react";

import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import axios from "axios";

function ButtonLogout(props){

    const [text, setText ] = useState("")
    
    const [cookies] = useCookies(['name']);

    axios.post("http://erasmus-recipes-backend.herokuapp.com/secured/user", {token: cookies.token})
    .then(response =>{
        setText("Logout");
    })
    .catch(error => {
        setText("Login");
    })

    
    return (
        <Link to="/" onClick={props.logout} ><input type={props.typeCustom} class={props.w3classprops} value={text}></input></Link>
    );
    
}

export default ButtonLogout; 