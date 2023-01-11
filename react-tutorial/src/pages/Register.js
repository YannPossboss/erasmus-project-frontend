import React from "react";
import axios from 'axios';

import erasmus from "./logo/img_avatar2.png"
import hems from "./logo/hems.jpg"

class Register extends React.Component{

    constructor(props){
        super(props)

        this.state =  {
            email: '',
            password: '',
            admin: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:5000/api/register', this.state)
        .then(response =>{
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render (){

        const { email, password, admin } = this.state

        return(
            <div>   

                <div class="w3-top">
                    <div class="w3-bar w3-theme1" id="myNavbar">
                    <a href="/login" class="w3-bar-item w3-text-white w3-button w3-green">Go to Login</a>
                    <a href="/impress" class="w3-bar-item w3-button w3-text-white w3-right w3-dark-gray">Legal notice</a>
                    </div>
                </div>


                <div class="imgcontainer w3-hide-small">
                    <img src={erasmus} alt="Avatar" class="avatar"/>
                    <img src={hems} alt="Avatar2" class="avatar"/>
                </div>

                <div class="center">

                <div class=" w3-center w3-hide-large w3-margin-top">
                    <img src={erasmus} alt="Avatar" class="avatar"/>
                    <img src={hems} alt="Avatar2" class="avatar"/>

                    <h1>Registration</h1>
                </div>

                <div class="w3-hide-small">

                <h1>[WebseiteName] <br/>Registration</h1>
                </div>

                    <form onSubmit={this.submitHandler}>

                        <div class="txt_field">
                            <input type="text" id="email" name="email" value={email} onChange = {this.changeHandler} required/>
                            <span></span>
                            <label>Set Email</label>
                        </div>

                        <div class="txt_field">
                            <input type="password" id="password" name="password" value={password} onChange = {this.changeHandler} required/>
                            <span></span>
                            <label>Set Password</label>
                        </div>

                        <div class="place_hold">
                            <br/>
                        </div>

                        <div class="text_field">
                            <label>Admin Account Key*</label>
                            <input type="text" id="admin" name="admin" value={admin} onChange = {this.changeHandler}/>
                        </div>

                        <br/>

                        <div class="style2">
                            <input type="submit" value="Register Account"/>
                        </div>

                        <div class="signup_link"> <h6> fields with * are not required </h6> </div>
                    </form>

                </div>

                <div class="footer">

                    <p>&copy; 2019 | 2022 GreenMedia | Erasmus+ Demo </p>

                </div>

            </div>
        );
    }
}

export default Register;