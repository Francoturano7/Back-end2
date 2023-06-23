const Router = require("express");
const ProductManager = require("../../controllers/productManager");
const realTimeRouterDb = require("./realTimeProducts.views");
const homeRouter = require(`./home.views.js`)
const viewRouter = Router()


viewRouter.use(`/index`, homeRouter)
viewRouter.use(`/realtimeproducts`, realTimeRouterDb)

module.exports = viewRouter