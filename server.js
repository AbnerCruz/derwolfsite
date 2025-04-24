const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

//Static files
app.use(express.static(path.join(__dirname,"public")));

//Rotes
app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname, "views", "home.html"))
});

app.get("/aulas", (req,res) =>{
    res.sendFile(path.join(__dirname, "views", "aulas.html"))
});

app.get("/produtos", (req,res) =>{
    res.sendFile(path.join(__dirname, "views", "produtos.html"))
});

app.listen(PORT, ()=>{
    console.log("Server running in localhost:" + PORT);
})