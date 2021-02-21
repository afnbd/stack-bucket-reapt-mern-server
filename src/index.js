require("dotenv").config();
const express = require("express");
const path = require("path")
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");


const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../',"public")))
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get("/", (req, res) => {
    throw new Error('custom Error');
    res.status(200).json({
        name: "afran",
    })
})

app.use((req, res, next) => {
   
    const error = new Error(" 404 not found page");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    console.log(error);
    if(error.status == 404){
       return res
       .status(404)
       .json({
            msg: error.message,
            status: 404
       })
    }
    return res
    .status(500)
    .json({
        msg: 'Internal Server Error',
        status: 500,
    })
})


app.listen(process.env.PORT, () =>{
    console.log("Server is Running PORT ON ", process.env.PORT)
})