const express = require(`express`)
const { Router } = express
const router = new Router()
const CartManager = require(`../src/CartManager.js`)

let cart = new CartManager()


router.get(`/`, async (req, res) => {
    res.send(await cart.getCarts())
})

router.post(`/`, async (req, res) => {
    res.send(await cart.addCart())
})

router.get(`/:cid`, async (req, res) => {
    let id = req.params.cid
    res.send(await cart.getCartsById(id))
})

router.post(`/:cid/products/:pid`, async (req, res) => {
    let cartId = req.params.cid
    let productId = req.params.pid
    res.send(await cart.addProductInCart(cartId, productId))
})




module.exports = router