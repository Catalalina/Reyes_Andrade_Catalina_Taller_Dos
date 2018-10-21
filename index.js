const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");
const app =express();

app.use(express.static("public"));

//decirle al server com construir templates
app.engine("handlebars",hbs());

app.set("view engine", "handlebars");



//llamar la dir
app.get("/",function(request, response){
    var title= {
        title: 'A VIBRANT & EXOTIC TEA',
      
    }
response.render("index", title);
});

//otras cosas
//app.get("/",function())

app.listen(5500);