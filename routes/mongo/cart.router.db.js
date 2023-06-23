const express = require("express");
const  CartManager  = require ("../../dao/dbManager/productManagerDb");
const cartRouter = express.Router()
const productManager = new CartManager()
cartRouter.get("/", async (req, res) => {


})

module.exports = cartRouter;