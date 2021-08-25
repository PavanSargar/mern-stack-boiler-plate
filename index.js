const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/react-blogv1', { useNewUrlParser: true }).then(() => {
    console.log("DB Connected!");
}).catch(err => console.error(err));



app.listen(5000, () => {
    console.log("Listening on Port: 5000");
});