import React from "react";

import Footer from "./pageComponent/Footer";

import erasmus from "./logo/img_avatar2.png"

import { Link } from 'react-router-dom';

import { useCookies } from "react-cookie";

import {useNavigate} from "react-router-dom";

import axios from "axios";

function Landing(props){
    const navigate = useNavigate()
    const [cookies] = useCookies(['name']);

    //Wenn du eingeloggt bist, wirst du direkt zur Navigation page weitergeleitet
    axios.post("http://10.142.242.78:5000/secured/user", {token: cookies.token})
    .then(response =>{
        console.log(response)
        //Das passiert hier
        navigate("/navigation");
    })
    .catch(error => {
        console.log(error)
    })

    


        return (
            <div>
                <div> 
                    <div class="center w3-hide-large w3-hide-medium">

                        <div class="w3-center w3-margin-top">
                        <img src={erasmus} alt="Avatar" class="avatar"/>
                        </div>

                            <br/>
                            <br/>

                            <h3 class="landing3 w3-margin-left">Hello and welcome on our Erasmus+ Project Website !</h3>
                            <h5 class="landing4 w3-margin-left">On this website you can find instructions and recipes for all kinds of delicious dishes from all over the world. </h5>


                            <div class="style2">
                                <Link to="/login"><input type="submit" value="Login to your Account"></input></Link>
                            </div>


                            <div class="style2">
                                <Link to="/register"><input type="submit" value="Register new Account"/></Link>
                            </div>


                            <div class="style2">
                                <Link to="/navigation"><input type="submit" value="Continue without Login"/></Link>   
                            </div>
                    </div>



                     <div class="column3 w3-display-middle-left w3-hide-small">
        
                        <div class="imgcontainer2">
                            <img src={erasmus} alt="Avatar" class="w3-center"/>
                        </div>

                        <h1 class="landing w3-margin-left"><h1>Hello and welcome on our Erasmus+ Project Website !</h1></h1>
                        <h3 class="landing w3-margin-left"><h3>On this website you can find instructions and recipes for all kinds of delicious dishes from all over the world.</h3></h3>
                        
                        <br/>
                        <br/>
                        <br/>

                        <div class="style2">
                            <Link to="/login"><input type="submit" value="Login to your Account"></input></Link>
                        </div>

                        <div class="style2">
                            <Link to="/register"><input type="submit" value="Register new Account"/></Link>  
                        </div>


                        <div class="style2">
                            <Link to="/navigation"><input type="submit" value="Continue without Login"/></Link>   
                        </div> 
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }


export default Landing;