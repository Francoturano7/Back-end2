const { Router } =require ('express')
const  ProductManager  = require ("../../controllers/productManager")
 const productManager = new ProductManager("./db/products.json") // -----------Corregir importacion
const homeRouter = Router()

homeRouter.get('/', async (req, res)=>{
 
 const data =  await productManager.getProducts()
 console.log( "data",data)
  res.render("index",{ data, style: "index.css"})
})
module.exports = homeRouter;// Corregir exportacion