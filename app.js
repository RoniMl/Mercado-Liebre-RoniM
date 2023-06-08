const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, './public')));

app.get("/register.html", function(req, res) {
    let htmlPath = path.resolve(__dirname, './views/register.html');
    res.sendFile(htmlPath);
  });
  
  app.get("/signup.html", function(req, res) {
    let htmlPath = path.resolve(__dirname, './views/signup.html');
    res.sendFile(htmlPath);
  });

app.get("/login.html", function(req, res) {
    let htmlPath = path.resolve(__dirname, './views/login.html');
    res.sendFile(htmlPath);
  });

app.get("/",function(req,res) {
    let htmlPath = path.resolve(__dirname,'./views/index.html')
    res.sendFile (htmlPath);
    })

app.listen(3000, function () {
    console.log("Servidor corriendo");
});
