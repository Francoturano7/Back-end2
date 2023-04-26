const express=require(`express`)
const path= require(`path`)
const ProductManager = require('./ProductManager.js')
const app=express()





app.listen(8080,()=>{
    console.log(`escuchando puerto 8080`)
})
let products = new ProductManager()

app.get(`/products`,async(req,res)=>{
    let fileProducts=products.readProducts()
    res.send(await fileProducts )
    
})

app.get(`/products/:id`,async(req,res)=>{
    let id= parseInt (req.params.id)
    try {
        const productFound=await products.getProductsById(id)
        if(!productFound){
            res.send(`Product not Found`)
        }else{
            res.send(productFound )
            
        }
    } catch (error) {
        res.send(`Error`)
    }
    
})

