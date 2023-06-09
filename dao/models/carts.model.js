const mongoose=require(`mongoose`)

const CartSchema = new mongoose.Schema({
    user:{
                type:String,
                required:true
            },
            products:{
                type:Object,
                required:true
            },
            totalPrice:{
                type:Number,
                required:true
            }
        })

const Cart= mongoose.model(`Cart`,CartSchema)
module.exports = Cart