const express = require("express");
const { createProduct, getProduct, updateProduct, deleteProduct, getProducts } = require("../controllers/productController.js")
const router = express.Router();
const Product = require("../models/productModel.js");

//middleware 
router.use(express.json());

//get all products
router.get("/", getProducts);
//get a single product
router.get("/:id", getProduct);
//post a new product
router.post("/", createProduct);
//delete a product
router.delete("/:id", deleteProduct);
//update a product
router.patch("/:id", updateProduct);

module.exports = router;