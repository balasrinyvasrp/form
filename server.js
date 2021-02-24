const express=require("express");
const ejs=require("ejs");
const bodyParser=require("body-parser");
const path=require("path");
require('dotenv').config();
const port=process.env.PORT ;
const app=express();

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res) =>{
    res.sendFile(__dirname+'/index.html');
})

app.post("/",(req,res)=>{
    var firstname=req.body.firstname;
    var lastname=req.body.lastname;
    var email=req.body.email;
    var phone=req.body.number;
    res.render('home',{fname:firstname , lname : lastname , mail : email , mobile : phone});
})
app.listen(port,()=>{
    console.log("Server running on PORT "+port);
})