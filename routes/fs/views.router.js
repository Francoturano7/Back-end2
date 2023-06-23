const express = require ('express')
const  {ProductManager}  = require ('../../controllers/productManager.js')
const  realTimeRouter  = require ('./realTimeProducts.views.js')
const  homeRouter  = require ('./home.views.js')
 const viewRouter = express.Router()


viewRouter.use(`/index`, homeRouter)
viewRouter.use(`/realtimeproducts`, realTimeRouter)

module.exports = viewRouter