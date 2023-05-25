const Router =require ("express");
const ProductManager =require ("../src/ProductManager");
const realTimeRouter= require("./realTimeProducts.views");
const homeRouter=require(`./home.views.js`)
 const viewRouter=Router()


viewRouter.use(`/home`,homeRouter)
viewRouter.use(`/realtimeproducts`,realTimeRouter) 

module.exports=viewRouter