const express = require("express");
const router = express.Router();
const Product = require("../models/productModel.js");

//middleware 
router.use(express.json());

//get all products
router.get("/", async (req, res) => {
    const products = await Product.find({}).sort({ createdAt: -1 });
    res.status(200).json(products);
});
//get a single product
router.get("/:id", (req, res) => {
    res.json({ msg: "get a single product" });
});
//post a new product
router.post("/", async (req, res) => {
    const data = req.body;
    try {
        const product = await Product.create(data);
        res.status(200).json(product);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
//delete a product
router.delete("/:id", (req, res) => {
    res.json({ msg: "delete a product" });
});
//update a product
router.patch("/:id", (req, res) => {
    res.json({ msg: "update a product" });
});

module.exports = router;