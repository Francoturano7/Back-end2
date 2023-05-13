const express = require(`express`)
const { Router } = express
const router = new Router()
const uuid4 = require(`uuid4`)

// let products = require(`./productos.json`)

let carts= require(`./carrito.json`)


router.get(`/`, (req, res) => {
    res.send(carts)
})

router.post(`/`, (req, res) => {
    let id = uuid4()
    let products=[{producto1:`prodcto1`,producto2:`producto2`}]
    carts.push(id,products)
    res.send({ id, products })
})

router.get(`/:cid`, (req, res) => {
    let cid = carts.cid
    const productFound = products.filter((elem) => {
        return elem.id === cid
    })
    res.send(productFound)
})

router.post(`/:cid/product/:pid`, (req, res) => {
    let idCarrito = req.params.cid
    const carritoFound = carts.filter((elem) => {
        return elem.id === idCarrito
    })
    let idProducto=req.params.pid
    const productFound=carritoFound.filter((elem) => {
        return elem.id === idProducto
    })
    carts.push(productFound)
    res.send(productFound)

})

module.exports = router