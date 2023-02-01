import React from "react";

import { Link } from 'react-router-dom';

function ButtonProfile(){
    return(
        <Link to="/editp"><input type="button" value="Profile"class="w3-center w3-hide-small"></input></Link>
    );
}

export default ButtonProfile; 