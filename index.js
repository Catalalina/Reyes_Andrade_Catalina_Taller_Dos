const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");
const app = express();

app.use(express.static("public"));

//decirle al server com construir templates
app.engine("handlebars", hbs());

app.set("view engine", "handlebars");
//____________________________________________________________________________________________________________________________________________________________


const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const url = "mongodb://localhost:27017";
const mongoName = "Taller2";
const mongoClient = new MongoClient(url);

var products = null;

mongoClient.connect(function (err) {

    assert.equal(null, err);
    console.log("equis de");

    const db = mongoClient.db(mongoName);
    products = db.collection("products");
});





//____________________________________________________________________________________________________________________________________________________________

//llamar la dir
app.get("/", function (request, response) {
    var title = {
        title: 'A VIBRANT & EXOTIC TEA',

    }
    response.render("index", title);
});

//otras cosas
//app.get("/",function())

app.get("/store", function (request, response) {
    var link = request.query.product__name;
    products.find({}).toArray(function(err, docs){
        if(err){
            console.log(err);
            return;
        }

        var context = {products: docs};

        var product = findProduct(docs,'nombre',link);

        if(product !== null){
            response.render("description", product);
        }else{
            response.render("store", context);
        }

    });

   
});


function findProduct(array,nombre, value){
    for (let index = 0; index < array.length; index++) {
        
        if (array[index][nombre] === value) {
            return array[index];
        }
        
    }

    return null;
}




app.listen(5500);