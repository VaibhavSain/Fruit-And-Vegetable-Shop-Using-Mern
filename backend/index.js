const express = require("express");
const productRoutes = require("./routes/products.js");
const mongoose = require("mongoose");
require("dotenv").config();
//express
const app = express();

//routes
app.use("/api/products", productRoutes);

//middlware 
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});
app.use(express.json());

//connect to db
mongoose.connect(process.env.MONGOURL)
    .then(() => {
        //listening for requests
        app.listen(process.env.PORT || 4000, () => {
            console.log('Listening on port ', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    })


