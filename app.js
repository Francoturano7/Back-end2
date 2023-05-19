//Create Server
const express = require(`express`)
const app = express()
const path = require(`path`)

//Http import
const http= require(`http`)
const server= http.createServer(app)

//Views Engine
const handlebars=require(`express-handlebars`)

//Import Routes
const homeRouter=require(`./routes/home.router`)
const routesApiProducts = require(`./routes/products`)
const routesApiCarts = require(`./routes/carts`)

//Socket import
const {Server}=require(`socket.io`)
const io=new Server(server)


const PORT = 8080 || process.env.PORT

//Public
app.use(express.static(__dirname+`/public`))

//Views
app.engine(`handlebars`,handlebars.engine())
app.set(`view engine`, `handlebars`)
app.set(`views`, __dirname+`/views`)




app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Routes
app.use(`/home`,homeRouter)
app.use(`/api/products`, routesApiProducts)
app.use(`/api/carts`, routesApiCarts)

let messages=[]

//Socket
io.on(`connection`,(socket)=>{
    console.log(`New User Conected`)
    socket.emit(`wellcome`,`Hola Cliente Bienvenido`)

    socket.on(`new-message`,(data)=>{
        console.log(data)
        messages.push(data)
        io.sockets.emit(`messages-all`,messages)
    })
})


server.listen(PORT, () => {
    console.log(`escuchando puerto 8080`)
})