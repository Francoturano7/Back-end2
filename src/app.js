const express = require(`express`)
const path = require(`path`)

const app = express()
const PORT = 8080


const routesApiProducts = require(`../routes/products`)
const routesApiCarts = require(`../routes/carts`)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(`/api/products`, routesApiProducts)
app.use(`/api/carts`, routesApiCarts)


app.listen(PORT, () => {
    console.log(`escuchando puerto 8080`)
})