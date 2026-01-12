const express = require("express"); //import express
const cors = require("cors"); //import cors
require("dotenv").config();//loads env variable from .env

const authRoutes = require("./routes/auth.routes"); //import routes
const app = express(); //creates express application

//middleware
app.use(cors());//enables cors for all incoming routes, every req pass thorugh it
app.use(express.json());//allows server to undertand json data
app.use("/api/auth", authRoutes);//when req start with /api/auth send it to authRoutes
app.get("/", (req, res) => {
    res.send("Auth backend running");
})

module.exports = app;