import React from "react";

import erasmus from "./logo/img_avatar2.png"
import hems from "./logo/hems.jpg"

import { Link } from 'react-router-dom';

class Landing extends React.Component {
    render () {
        return (
            <div>
                
                <div class="w3-top">
                    <div class="w3-bar w3-theme1" id="myNavbar">
                    <Link to="/impress" class="w3-bar-item w3-button w3-text-white w3-hide-small">Legal notice</Link>
                    </div>
                
                    <div id="navDemo" class="w3-bar-block w3-theme1 w3-hide w3-hide-large w3-hide-medium">
                    <Link to="/impress" class="w3-bar-item w3-button">Legal notice</Link>
                    </div>
                </div>

                <div> 

                    <div class="w3-hide-large">

                    <div class="w3-bar w3-theme1" id="myNavbar">
                    <Link to="/impress" class="w3-bar-item w3-button w3-text-white w3-left w3-dark-gray">Legal notice</Link>
                    </div>

                    </div>

                    <div class="center w3-hide-large w3-hide-medium">

                        <div class="w3-center w3-margin-top">
                        <img src={erasmus} alt="Avatar" class="avatar"/>
                        <img src={hems} alt="Avatar2" class="avatar"/>
                        </div>

                            <br/>
                            <br/>

                            <h3 class="landing3 w3-margin-left">Hello and welcome on our Erasmus+ Project Website !</h3>

                            <h5 class="landing4 w3-margin-left">On this website you can find instructions and recipes for all kinds of delicious dishes from all over the world. </h5>
                            
                            <br/>

                            <Link to="/login"><input type="submit" value="Login to your Account"></input></Link>
                            
                            <br/>
                            <br/>

                            <div class="style2">
                            <Link to="/register"><input type="submit" value="Register new Account"/></Link>
                            </div>

                            <br/>

                            <div class="style3 w3-center">
                            <Link to="/recipe"><input type="submit" value="Continue without Login"/></Link>   
                            </div>

                            <br/>

                    </div>

                     <div class="column3 w3-display-middle-left w3-hide-small">
                    
                     <br/>
                     <br/>

                    <div class="imgcontainer2 w3-center">
                    <img src={erasmus} alt="Avatar" class="avatar"/>
                    <img src={hems} alt="Avatar2" class="avatar"/>
                    </div>

                    <br/>

                    <h1 class="landing w3-margin-left">Hello and welcome on our Erasmus+ Project Website !</h1>
                    <h3 class="landing w3-margin-left">On this website you can find instructions and recipes for all kinds of delicious dishes from all over the world. </h3>
                    
                    <br/>
                    <br/>
                    <br/>

                    <Link to="/login"><input type="submit" value="Login to your Account"></input></Link>

                    <br/>
                    <br/>
                    <br/>

                    <div class="style2">

                    <Link to="/register"><input type="submit" value="Register new Account"/></Link>
                    
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <div class="style4">

                    <Link to="/recipe"><input type="submit" value="Continue without Login"/></Link>   
                    
                    </div> 

                    <br/>
                    <br/>

                    </div>
                </div>

                            <div class="footer">
                                <p>&copy; 2019 | 2022 HEMS | Erasmus+ FinalBuild </p>
                            </div>

            </div>
        );
    }
}

export default Landing;