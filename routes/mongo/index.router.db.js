const express = require("express");
const cartsRouter = require("./cart.router.db.js");
const productRouter = require("./product.router.db.js");

const indexRouter =express.Router()

indexRouter.use("/carts", cartsRouter)
indexRouter.use("/products", productRouter)

module.exports = indexRouter