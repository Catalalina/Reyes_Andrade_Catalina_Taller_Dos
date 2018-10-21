const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");
const app =express();

app.use(express.static("public"));

//decirle al server com construir templates
app.engine("handlebars",hbs());

app.set("view engine", "handlebars");
//____________________________________________________________________________________________________________________________________________________________


const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const url =  "mongodb://localhost:27017";
const mongoName = "Taller2";
const mongoClient = new MongoClient(url);
mongoClient.connect(function(err){

assert.equal(null,err);
console.log("equis de");

const db = mongoClient.db(mongoName);
const product =db.collection("cargo");
product.insertMany([
    {a:1}, {a:2},{a:3}

],function(err, result){

    assert.equal(err,null);
    console.log("se enviooo");
});
    mongoClient.close();
});





//____________________________________________________________________________________________________________________________________________________________

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















