import React, { useState } from "react";

import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import axios from "axios";

function ButtonLogout(props){
    console.log("test")

    const [logedin, setLogedin ] = useState(true)
    const [text, setText ] = useState("")
    
    const [cookies, setCookie, removeCookie] = useCookies(['name']);

    axios.post("http://localhost:5000/secured/user", {token: cookies.token})
    .then(response =>{
        setLogedin(true);
        setText("Logout");
    })
    .catch(error => {
        setLogedin(false);
        setText("Login");
    })

    
    return (
        <Link to="/" onClick={props.logout} ><input type={props.typeCustom} class={props.w3classprops} value={text}></input></Link>
    );
    
}

export default ButtonLogout; 