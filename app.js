//Create Server
const express = require(`express`)
const app = express()
const path = require("path")

const http = require(`http`)
const server = http.createServer(app)

const handlebars = require(`express-handlebars`)

const homeRouter = require(`./routes/home.views.js`)
const indexRouter = require(`./routes/index.router.js`)
const realTimeRouter = require("./routes/realTimeProducts.views")
const ProductManager = require("./src/ProductManager")

 //const ManagerMongoUser = require("./dao/mongoDao/user.db.js")
const ManagerMongoProduct = require("./dao/mongoDao/product.db.js")
const ManagerMongoMessage = require("./dao/mongoDao/message.db.js")
const ManagerMongoCart=require("./dao/mongoDao/cart.db.js")

//const routerUser = require("./routes/user.router.js")
const routerProduct= require("./routes/product.router.js")
const routerMessage=require('./routes/message.router.js')
const routerCart=require('./routes/cart.router.js')

const routerChat = require("./routes/chat.router.js")

const { Server } = require(`socket.io`)
const io = new Server(server)

const productManager = new ProductManager(`./db/productos.json`)
 //const dataBaseConnectUser= new ManagerMongoUser('mongodb+srv://francoturano777:ecommerce123@ecommerce.2tukzgj.mongodb.net/ecommerce')
const dataBaseConnectProduct= new ManagerMongoProduct('mongodb+srv://coder:123456co@clustercodermongo.arye4ja.mongodb.net/ecommerce')
const dataBaseConnectMessage= new ManagerMongoMessage('mongodb+srv://coder:123456co@clustercodermongo.arye4ja.mongodb.net/ecommerce')
const dataBaseConnectCart= new ManagerMongoCart('mongodb+srv://coder:123456co@clustercodermongo.arye4ja.mongodb.net/ecommerce')


const PORT = 8080 || process.env.PORT

server.listen(PORT, () => {
    console.log(`escuchando puerto 8080`)
    //dataBaseConnectUser.connectionMongoDbUser()
    dataBaseConnectProduct.connectionMongoDbProduct()
    dataBaseConnectMessage.connectionMongoDbMessage()
    dataBaseConnectCart.connectionMongoDbCart()
    
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine(`handlebars`, handlebars.engine())
app.set(`views`, __dirname + `/views`)
app.set(`view engine`, `handlebars`)

app.use(express.static(__dirname + `/public`))

app.use(`/api`, indexRouter)

app.use(`/`, homeRouter)
app.use(`/realtimeproducts`, realTimeRouter)
app.use(`/chat`,routerChat)

//app.use(`/users`, routerUser)
app.use(`/products`,routerProduct)
app.use(`/carts`, routerCart )
app.use(`/messages`,routerMessage)


//Socket
io.on(`connection`, async (socket) => {
    console.log(`New User Conected`)


    socket.on(`addProduct`, async (data) => {
        const added = await productManager.addProduct(data)
        io.sockets.emit(`allProducts`, await productManager.getProducts())
    })
})

let messages = []



//socket  
io.on(`connection`,(socket)=>{
    console.log(`New user conectado`)
    socket.emit(`wellcome`,`Hola cliente bienvenido`)

    socket.on(`new-message`,(data)=>{
         console.log(data)
         messages.push(data)
         io.sockets.emit(`messages-all`,messages)
    })
})



app.get(`*`, (req, res) => {
    res.status(404).json({ status: `error`, msg: `Path not found` })
})
