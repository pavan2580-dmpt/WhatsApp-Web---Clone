const express = require('express');
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors());
const DB= require("./DataBase/Db");
const bodyParser = require('body-parser');

app.use(bodyParser.json());


DB();
app.get("/api/server",(req,res)=>{
    res.send("Hello from server...")
    
})

app.use("/api",require("./routers/Routes"))



app.listen(5000,()=>{console.log("Running on the port 5000")})
