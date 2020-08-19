const express = require('express');
const fs =require('fs');

//Server
const app = express();
app.listen(3000);

app.set('view engine','ejs');


//Requests 
//------------------------------------------------------------------------
//[HOME]
app.get('/',(req,res) =>{
    console.log('request='+req.url);
    res.render('index');
});

//[about]
app.get('/about',(req,res) =>{
    console.log('request='+req.url);
  res.render('about');
});


//[ERROR 404]
app.use((req,res) =>{
    console.log('request='+req.url);
    res.status(404).render('404');
});

