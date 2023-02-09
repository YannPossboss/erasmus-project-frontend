import React from 'react';
import axios from 'axios';

import Footer from "./pageComponent/Footer"; 

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
        return(
            <div> 
                

                <Footer></Footer>
            </div>
        );
    };
}
 
export default AdminPost;