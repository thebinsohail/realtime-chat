const express = require('express');
const fs =require('fs');

//Server
const app = express();

//Requests [Home]
app.get('/',(req,res) =>{
    console.log('request='+req.url);
    res.sendFile('./views/index.html',{root:__dirname});
});

//[about]
app.get('/about',(req,res) =>{
    console.log('request='+req.url);
    res.sendFile('./views/about.html',{root:__dirname});
});


//[ERROR 404]
app.get((req,res) =>{
    console.log('request='+req.url);
    res.sendFile('./views/404.html',{root:__dirname});
});

app.listen(3000);