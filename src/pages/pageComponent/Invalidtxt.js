import React from "react";

function Invalidtxt(props){

    if(props.invalidTEXT){
        return (
            <div class="notification">
                <div><h3>{props.text}</h3></div>
            </div>
        );
    }
} 

export default Invalidtxt; 