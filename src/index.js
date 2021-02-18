const express = require("express");
const cors = require("cors");
const morgran = require("morgan");
const mongoose = require("mongoose");


const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        name: "afran",
    })
})

app.listen(8080,() =>{
    console.log("Server is Running PORT ON 8080.")
})