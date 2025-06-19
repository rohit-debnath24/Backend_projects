
const express = require('express');
const path = require('path');
const app =express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

app.get("/",function(req,res){
    res.render("index.ejs");
});
app.get("/profile/:username",function(req,res){
    req.params.username
    res.send(`welcome,${req.params.username}`);
    console.log("username:", req.params.username);
});
app.get("/profile/:username/:age",function(req,res){
    req.params.age
    req.params.username
   // res.send(req.params.username,req.params.age);
    res.send(`welcome,${req.params.username} 
         As i can see u seems ${req.params.age}`);
         
    
     console.log("Username", req.params.username);
    console.log("AGE", req.params.age); 
});

app.listen(3000,function(){
    
    console.log("Server is running on port 3000");
});
