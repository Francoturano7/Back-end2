const mongoose=require(`mongoose`)

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    price:{
        typre:Number,
        required:true
    },
    category:{
        type:String,
        required:true,
        enum:[`Hogar`,`Cocina`,`Higiene`]
    },
    stock:{
        type:Number,
        default:10
    },
    status:{
        type:Boolean,
        default:true
    }
})

const Product= mongoose.model(`Product`,ProductSchema)
