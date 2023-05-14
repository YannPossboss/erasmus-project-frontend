import React from "react";
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <div class="footer">
            <p>&copy; 2019 | 2022 HEMS | Erasmus+ Beta Build | <Link to="/impress">Legal notice</Link></p>
        </div>
    ); 
}

export default Footer; 