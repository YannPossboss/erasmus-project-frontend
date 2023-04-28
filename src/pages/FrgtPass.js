import React from "react";
import axios from 'axios';

import erasmus from "./logo/img_avatar2.png"

import Footer from "./pageComponent/Footer"; 

import { Link } from 'react-router-dom';

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

                <img src={erasmus} alt="Avatar" class="avatar w3-right w3-hide-middle w3-hide-small"/>

                <div class="center">

                    <h1>Forgot password </h1>

                    <form onSubmit={this.submitHandler}>

                    <div class="txt_field">
                        <input type="text" id="user" name="user" value={user} onChange = {this.changeHandler} required/>
                        <span></span>
                        <label>Enter username</label>
                    </div>

                    <div class="txt_field">
                        <input type="text" id="email" name="email" value={email} onChange = {this.changeHandler} required/>
                        <span></span>
                        <label>Enter e-mail</label>
                    </div>

                        <div class="style2">
                            <input type="submit" value="Send new password"/>
                            <Link to="/login"><input type="submit" value="Cancel"/></Link>
                        </div>

                    </form>

                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default FrgtPass;