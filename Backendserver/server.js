//All imports
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const { isBuffer } = require("util");
const dotenv = require("dotenv");
dotenv.config();
// Database imports
const sqlite3 = require("sqlite3").verbose()
// Hashimport
const bcrypt = require("bcryptjs");
//JSONWEBTOKEN
const jwt = require("jsonwebtoken");
const cors = require("cors");
app.use(cors()); 

//connect to database
const db = new sqlite3.Database("database/mock.db", sqlite3.OPEN_READWRITE, (err) =>{
    if(err) return console.error(err.message);
});

//db.run("CREATE TABLE users(id INTEGER PRIMARY KEY AUTOINCREMENT,email STRING,password STRING,country STRING,admin BOOLEAN)");


//Load reactbuild
app.use(express.static(path.join(__dirname, "build")));

//some middleware

app.use(express.urlencoded({ extended: false}))
app.use(express.json());
app.use(bodyParser.json());
console.log("middleware was loaded");

//START OF API

//Register
app.post("/api/register", (req,res)=>{
    db.all("SELECT * FROM users", [], async (err,rows) => {
        if (err) return console.error(err.message);
        let emailIsInUse = false;
        for(let i = 0; i < rows.length; i++){
            if(rows.at(i).email === req.body.email){
                emailIsInUse = true;
            }
        }
        
        if(emailIsInUse === false){
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(req.body.password, salt)

            if(req.body.admin === ""){
            db.run("INSERT INTO users(email,password,country,admin) VALUES (?,?,?,?)", [req.body.email,hashPassword,"deutschland",false], (err) => {
                if (err){
                    return console.error(err.message);
                }else{
                    res.send("Registrierung war erfolgreich");
                    console.log("Debuginfo: Registrierung erfolgreich");
                }
              });
            }else if(req.body.admin !== ""){
                //TODO Registrierung mit Adminaccount
            }

        }else{ res.send("Email wird bereits verwendet");}
    });
});

//Login
app.post("/api/login", (req,res) => {
    db.all("SELECT * FROM users", [], async (err,rows) => {
        let emailExist = false;
        let dataset;
        for(let i = 0; i < rows.length; i++){
            if(req.body.email == rows.at(i).email){
                emailExist = true;
                dataset = rows.at(i);
            }
        }
        if(emailExist === false){ return res.status(400).send("Invalid Email");  }
        const validPass = await bcrypt.compare(req.body.password, dataset.password);
        if(!validPass) {return res.status(400).send("Invalid Password"); }
        
        //Create and assign a token
        const token = jwt.sign(dataset.id, process.env.TOKEN_SECRET)
        res.header("auth-token", token).send("Logged in");
        console.log("Debuginfo  Eingelogt: " + token);
    });
});



//END OF API

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "build/index.html"));
})
console.log("reactbuild index was loaded");

app.listen(3000), () => {
    console.log("Server listen");
};