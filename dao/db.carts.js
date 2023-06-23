const mongoose = require("mongoose");
module.exports={
    connectionMongoDbCart() {
        return mongoose.connect("mongodb+srv://francoturano777:coder1234@cluster0.jsfamxa.mongodb.net/ecommerce", { useUnifiedTopology: true, useNewUrlParser: true })
        .then(connect=>{
        console.log(`Conexion a DB Carts exitosa`)
         } ).catch(err=> console.log(err))
    }
}