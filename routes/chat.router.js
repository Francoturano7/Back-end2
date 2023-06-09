const express=require(`express`)
const { Router } = express

const routerChat =new Router()

routerChat.get(`/`,(req,res)=>{
    res.render(`chat`,{})
})

module.exports =routerChat