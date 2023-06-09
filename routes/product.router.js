const express=require(`express`)
const {Router}=express

const Product = require("../dao/models/products.model")

const routerProduct= new Router()


routerProduct.get(`/`,(req,res)=>{
    Product.find({})
    .then(pr=>{
        res.status(200).send({
            msg:`Todos los productos`,
            data:pr
        })
    })
        .catch(err=>{
            res.status(500).send({
                msg:`Error al obtener productos`,
                data:err
            })
        })
})

routerProduct.post(`/saveProduct`,(req,res)=>{
    let newpr =req.body
    let product=new Product(newpr)
    product.save()
    .then(pr=>{
        res.status(201).send({
            msg:`Producto guardado`,
            data:pr
        })
    })
    .catch(err=> console.log(err))
})

module.exports= routerProduct