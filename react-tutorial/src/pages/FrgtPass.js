import React from "react";
import axios from 'axios';

import erasmus from "./logo/img_avatar2.png"
import hems from "./logo/hems.jpg"

class FrgtPass extends React.Component {

    constructor(props){
        super(props)

        this.state =  {
            user: '',
            email: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:5000', this.state)
        .then(response =>{
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {

        const { user, email } = this.state

        return (
            <div>

                <div class="w3-top">
                    <div class="w3-bar w3-theme1" id="myNavbar">
                    <a href="/" class="w3-bar-item w3-text-white w3-button w3-green">Go to Login</a>
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

                    <h1>Login</h1>
                </div>

                    <h1>[WebseiteName] <br/>Forgot Password </h1>

                    <form onSubmit={this.submitHandler}>

                    <div class="txt_field">
                        <input type="text" id="user" name="user" value={user} onChange = {this.changeHandler} required/>
                        <span></span>
                        <label>Enter Username</label>
                    </div>

                    <div class="txt_field">
                        <input type="text" id="email" name="email" value={email} onChange = {this.changeHandler} required/>
                        <span></span>
                        <label>Enter Email</label>
                    </div>

                    <div class="signup_link">
                        <div class="style3">
                            <input type="submit" value="Send new Password"/>
                        </div>
                        <br/>
                        <a href="/" class="w3-button w3-red">Cancel</a>
                        <br/>
                    </div>

                    </form>

                </div>

                            <div class="footer">
                                <p>&copy; 2019 | 2022 HEMS | Erasmus+ FinalBuild </p>
                            </div>

            </div>
        );
    }
}

export default FrgtPass;