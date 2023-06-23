const express=require(`express`)
const {Router}=express

const Message = require("../../dao/models/messages.models")

const routerMessage= new Router()


routerMessage.get(`/`,(req,res)=>{
    Message.find({})
    .then(mens=>{
        res.status(200).send({
            msg:`Todos los mensajes`,
            data:mens
        })
    })
        .catch(err=>{
            res.status(500).send({
                msg:`Error al obtener mensajes`,
                data:err
            })
        })
})

routerMessage.post(`/saveMessage`,(req,res)=>{
    let newMsg =req.body
    let message=new Message(newMsg)
    message.save()
    .then(mens=>{
        res.status(201).send({
            msg:`Mensaje guardado`,
            data:mens
        })
    })
    .catch(err=> console.log(err))
})

module.exports= routerMessage