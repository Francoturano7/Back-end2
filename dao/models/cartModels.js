const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema({
    
    name:{
        type:String,
       
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    category:{
        type:String,
        required:true,
        enum:["Remeras", "Zapatillas", "Objetos"]
    }
})

const CartModel = mongoose.model("cart", CartSchema)
module.exports = CartModel