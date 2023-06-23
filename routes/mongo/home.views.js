const { Router } =require ('express')
const  ProductManager  = require ("../../dao/dbManager/productManagerDb")
 const productManager = new ProductManager() 
const homeRouter = Router()

homeRouter.get('/', async (req, res)=>{
 
 const data =  await productManager.getProducts()
 console.log( "data",data)
  res.render("index",{ data, style: "index.css"})
})
module.exports = homeRouter;// Corregir exportacion