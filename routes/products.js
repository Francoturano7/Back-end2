const express = require(`express`)
const { Router } = express
const router = new Router()
const uuid4 = require(`uuid4`)


let products = require(`./productos.json`)

//let products=[]

router.get(`/`, (req, res) => {
    res.json({ data: products, message: `Todos los productos enviados` })
})

router.get(`/:pid`, (req, res) => {
    let id = req.params.pid
    const productFound = products.filter((elem) => {
        return elem.id === id
    })
    res.send(productFound)
})

router.post(`/`, (req, res) => {
    let id = uuid4()
    let pr = req.body
    pr.id = id
    products.push(pr)
    res.send({ data: pr, message: `producto guardado con exito` })
})

router.put(`/:pid`, (req, res) => {
    let id = req.params.pid
    let infoNew = req.body

    let arrayUpdated = products.map((elem) => {
        if (elem.id == id) {
            return { ...infoNew, id }
        } else {
            return elem
        }
    })
    console.log(arrayUpdated)
    products = arrayUpdated
    res.send({ data: products, message: `Producto actualizado con exito` })
})

router.delete(`/:pid`, (req, res) => {
    let id = req.params.pid
    const arrayNew = products.filter((elem) => {
        return elem.id !== id
    })
    console.log(arrayNew)
    products = arrayNew
    res.send({ data: products, message: `Producto eliminado correctamente` })
})

module.exports = router