const express = require("express");
const app = express();
const port = 6000;
const mongoose = require("mongoose");
const mongoUrl = require("./keys");
app.use(express.json());
require("./models/models.js");
app.use(require("./routes/auth.js"));

mongoose.connect(mongoUrl);

mongoose.connection.on("connected",()=>{
    console.log("connected to mongoDB");
})
mongoose.connection.on("error",()=>{
    console.log("not connected");
})


app.listen(port, ()=>{
    console.log("server is running on "+ port);
})