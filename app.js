const express=require("express")
const app=express()
const path=require("path")
const public=path.resolve(__dirname,"./public");

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})
app.listen(3030,()=>{
    console.log("levantando servidor")
})