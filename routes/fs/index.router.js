const express = require("express");
const Router = require("express");
const cartsRouter = require("./cart.router.js");
const productRouter = require("./product.router.js");

const indexRouter =express.Router()

indexRouter.use("/carts", cartsRouter)
indexRouter.use("/products", productRouter)

module.exports = indexRouter