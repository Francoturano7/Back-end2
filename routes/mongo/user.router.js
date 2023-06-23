// const express=require(`express`)
// const {Router}=express

// const User = require("../dao/models/users.model")

// const routerUser= new Router()

// routerUser.get(`/`,(req,res)=>{
//     User.find({})
//     .then(products=>{
//         if(products.length)return res.status(200).send({products})
//         return res.status(204).send({message:`NOT CONTENT`})
//     }).catch(err=>res.status(500).send({err}))
// })

// routerUser.post(`/`,(req,res)=>{
//     let user= new User(req.body)
//     user.save()
//     .then(product=>
//         res.status(201).send({product})
//         ).catch(err=>res.status(500).send({err}))
// })

// module.exports= routerUser