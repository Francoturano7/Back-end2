const express = require(`express`)
const { Router } = express
const router = new Router()
const ProductManager = require('../src/ProductManager')

let product = new ProductManager()


router.get(`/`, async (req, res) => {
    res.send(await product.getProducts())
})

router.get(`/:pid`, async (req, res) => {
    let id = req.params.pid
    res.send(await product.getProductsById(id))
})

router.post(`/`, async (req, res) => {
    let newProduct = req.body
    res.send(await product.addProduct(newProduct))
})

router.put(`/:pid`, async (req, res) => {
    let id = req.params.pid
    let infoNew = req.body
    res.send(await product.updateProducts(id, infoNew))
})

router.delete(`/:pid`, async (req, res) => {
    let id = req.params.pid
    res.send(await product.deleteProductsById(id))
})

module.exports = router