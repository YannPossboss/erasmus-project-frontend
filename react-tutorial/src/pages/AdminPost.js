import React from 'react';
import axios from 'axios';

import erasmus from "./logo/img_avatar2.png"
import hems from "./logo/hems.jpg"

import { Link } from 'react-router-dom';

class AdminPost extends React.Component {

    constructor(){
        super();
        this.state = {
            selectedFile:'',
            title:'',
            description:''
        }
 
        this.handleInputChange = this.handleInputChange.bind(this);
    }
 
    handleInputChange(event) {
        this.setState({
            selectedFile: event.target.files[0],
          })
    }
 
    submit(){
        const data = new FormData() 
        data.append('file', this.state.selectedFile)
        console.warn(this.state.selectedFile);
        let url = "http://localhost:5000";
 
        axios.post(url, data, {  
        })
        .then(res => { 
            console.warn(res);
        })
 
    }
     
    render(){

        const { email } = this.state

        return(
            
            <div> 

                <div class="w3-top">
                    <div class="w3-bar w3-theme1" id="myNavbar">
                    <Link to="/" class="w3-bar-item w3-text-white w3-button w3-dark-gray"> ⬅ Back</Link>
                    <Link to="/impress" class="w3-bar-item w3-button w3-text-white w3-right w3-dark-gray">Legal notice</Link>
                    <div class="logoimg">
                        <img src={erasmus} alt="Avatar" class="avatar"/>
                        <img src={hems} alt="Avatar2" class="avatar"/>
                    </div>
                    
                    </div>
                </div>

                <div>
                    <form method="post">

                        <div class="form-group files">
                        <br/>
                        <br/>
                            <input type="file" className="form-control" name="upload_file" onChange={this.handleInputChange} />
                            <br/>
                            <br/>
                        </div>
                        
                    </form>

                    <div class="center2">

                <div class=" w3-center w3-hide-large w3-margin-top">
                     

                    <h1>Login</h1>
                </div>

                <div class="w3-hide-small">

                    <h1>Create Recipe<br/></h1>
                    
                </div>

                    <form onSubmit={this.submitHandler}> 

                            <div class="txt_field">

                                <input type="text" id="email" name="email" value={email} onChange = {this.changeHandler} required/>
                                <span></span>
                                <label>Post Title..</label>

                            </div>

                            <div class="w3-center">

                                <h8>Choose post country : </h8>

                                <select class="drop w3-center" id="country" name="country">
                                <option value="spain">Spain</option>
                                <option value="france">France</option>
                                <option value="greece">Greece</option>
                                <option value="croatia">Croatia</option>
                                <option value="poland">Poland</option>
                                <option value="germany">Germany</option>
                                </select>

                                <br/>

                            </div>
                            
                            <div>
                                <br/>
                                <textarea id="subject" name="subject" placeholder="Recipe description here.. (max. 1300 Character)"></textarea>
                            </div>

                            <div>

                                <br/>

                                <button1 type="submit" value="Login" className="btn btn-dark" onClick={()=>this.submit()}>Publish to Server 🗃</button1>

                                <br/>
                                <br/>

                            </div>
                            

                     </form>                    
                    </div>
                </div> 
                            <div class="footer">
                                <p>&copy; 2019 | 2022 HEMS | Erasmus+ FinalBuild </p>
                            </div>
            </div>
        );
    };
}
 
export default AdminPost;