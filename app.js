
const path = require("path")
const express = require("express")
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})
app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"about.html"));
});
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"Login.html"))
})

app.listen(3000,()=>{
    console.log("Server started at localhost")
})
