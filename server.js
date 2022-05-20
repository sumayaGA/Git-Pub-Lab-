const express = require("express");

const app = express(); 

const port = 3000;

const drinks = require("./models/drinks");

//Tests that port is functioning
app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!");
});

//Index
app.get("/drinks", (req,res) => {
    res.render("drinks_index.ejs", {allDrinks:drinks});
});


// app.get ("/drinks/:index", (req, res) => {
//     res.render ("drinks_index.ejs",  {
//         drink:drinks[req.params.index],
//     });
// });

//Show
app.get("/drinks/:id",(req,res)=>{
    res.send(req.params.id);
});

app.listen(port, ()=> {
    console.log("Listening from port ", port);
}); 