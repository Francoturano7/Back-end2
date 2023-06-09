const express=require(`express`)
const {Router}=express

const Cart = require("../dao/models/carts.model")

const routerCart= new Router()


routerCart.get(`/`,(req,res)=>{
    Cart.find({})
    .then(ct=>{
        res.status(200).send({
            msg:`Todos los Carritos`,
            data:ct
        })
    })
        .catch(err=>{
            res.status(500).send({
                msg:`Error al obtener carritos`,
                data:err
            })
        })
})

routerCart.post(`/saveCart`,(req,res)=>{
    let newCart =req.body
    let cart=new Cart(newCart)
    cart.save()
    .then(ct=>{
        res.status(201).send({
            msg:`Carrito guardado`,
            data:ct
        })
    })
    .catch(err=> console.log(err))
})

module.exports= routerCart