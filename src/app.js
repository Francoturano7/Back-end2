const express = require(`express`)
const path = require(`path`)
const ProductManager = require('./ProductManager.js')
const app = express()
const PORT = 8080


const routesApiProducts = require(`../routes/products`)
const routesApiCarts = require(`../routes/carts`)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


let products = new ProductManager()

app.use(`/api/products`, routesApiProducts)
app.use(`/api/carts`, routesApiCarts)

app.get(`/products`, async (req, res) => {
    let fileProducts = products.getProducts()
    res.json(await fileProducts)

})

app.get(`/products/:id`, async (req, res) => {
    let id = parseInt(req.params.id)
    try {
        const productFound = await products.getProductsById(id)
        if (!productFound) {
            res.send(`Product not Found`)
        } else {
            res.json(productFound)

        }
    } catch (error) {
        res.send(`Error`)
    }

})


app.listen(PORT, () => {
    console.log(`escuchando puerto 8080`)
})