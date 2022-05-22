const express = require("express");

const app = express(); 

const port = 3000;

const drinks = require("./models/drinks");
const food = require("./models/food");

//Root Index
app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!");
});

//Drinks Index && Food Index
app.get("/drinks", (req,res) => {
    res.render("drinks_index.ejs", {allDrinks:drinks, allFood:food});
});





//Show Drinks Route
app.get("/drinks/:id",(req,res)=>{
    res.render("drinks_show.ejs", {allDrinks:drinks});
});

// //Show Food Route
app.get("/food/:id",(req,res)=>{
    res.render("food_show.ejs", {allFood:food});
});


//Listen for the port
app.listen(port, ()=> {
    console.log("Listening from port ", port);
}); 