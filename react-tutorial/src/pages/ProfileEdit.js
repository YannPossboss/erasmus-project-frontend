import React from "react";

import person from "./logo/person.png"
import Footer from "./pageComponent/Footer"; 

import { Link } from 'react-router-dom';

class ProfileEdit extends React.Component {
    render () {
        return (
            <div>
                
                <div class="w3-top">
                    <div class="w3-bar w3-theme1" id="myNavbar">
                    <br/>
                    <br/>
                    </div>
                </div>

                <div class="propic w3-center w3-margin-top">
                    <br/>
                    <br/>
                    <img src={person} alt="peron"/>
                    <br/>
                    <br/>
                    <Link to="/" class="w3-button w3-light-blue">Upload profile picture</Link>
                </div>

                <div class="row">

                        <div class="column1 w3-display-middle-left">

                            <h1 class="w3-margin-left"> Your personal details :</h1>
                            <br/>
                            <h3 class="w3-margin-left">User role:</h3>
                            <h4 class="w3-margin-left"><span3>Admin</span3></h4>
                            <br/>
                            <h3 class="w3-margin-left">School:</h3>
                            <h4 class="w3-margin-left"><a href="http://hems.de/hemshome/">HEMS Darmstadt</a>, Hessen, Germany 🇩🇪</h4>
                            <br/>
                            <h3 class="w3-margin-left">First name:</h3>
                            <h4 class="w3-margin-left">Paul</h4>
                            <br/>
                            <h3 class="w3-margin-left">Last name:</h3>
                            <h4 class="w3-margin-left">Sas</h4>
                            <br/>
                            <h3 class="w3-margin-left">E-mail:</h3>
                            <h4 class="w3-margin-left">paulgaming4k@gmail.com</h4>
                            <br/>

                        </div>

                        <div class="column2 w3-center w3-display-middle-right">

                            <h1>Edit personal details :</h1>

                                <br/>
                                <br/>
                                <br/>
                                <br/>

                            <div>
                                <label for="uname"><b>Edit First Name</b></label>
                                <br/>
                                <input type="text" placeholder="Enter new firstname" name="uname" required/>
                                <br/>
                                <label for="uname"><b>Edit Last Name</b></label>
                                <br/>
                                <input type="text" placeholder="Enter new lastname" name="uname" required/>
                                <br/>
                                <label for="uname"><b>Edit User School</b></label>
                                <br/>
                                <input type="text" placeholder="Enter new school name" name="uname" required/>
                                <br/>
                                <label for="uname"><b>Edit Your E-mail</b></label>
                                <br/>
                                <input type="text" placeholder="Enter new e-mail" name="uname" required/>
                                <br/>
                                <br/>
                                <br/>
                                <Link to="frgt_pass.html" class="w3-button w3-light-blue"><i class="fa fa-gears w3-margin-right"></i>Change your Password</Link>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </div>

                        </div>

                </div>
                <Footer></Footer>
            </div>
        );
    }
}
export default ProfileEdit;