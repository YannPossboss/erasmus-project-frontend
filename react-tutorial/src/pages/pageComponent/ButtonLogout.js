import React, { useState } from "react";

import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import axios from "axios";

function ButtonLogout(props){
    console.log("test")

    const [logedin, setLogedin ] = useState(true)
    const [cookies, setCookie, removeCookie] = useCookies(['name']);

    axios.post("http://localhost:5000/secured/user", {token: cookies.token})
    .then(response =>{
        setLogedin(true);
    })
    .catch(error => {
        setLogedin(false);
    })

    if(logedin){
        return (
            <Link to="/" onClick={props.logout} ><input type="button" class="w3-center w3-hide-small" value="Logout"></input></Link>
        );
    }
}

export default ButtonLogout; 