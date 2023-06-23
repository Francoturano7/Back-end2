const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      code: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        default: 0,
        required: true,
      },
      stock: {
        type: Number,
        default: 0,
        required: true,
      },
      category: {
        type: String,
        enum:["Remeras", "Zapatillas", "Objetos", "Gorras", "Buzos","Pantalones"],
        required: true,
      },
      status: {
        type: Boolean,
        default: true,
      },
      thumbnails: {
        //array de strings
        type: [String],
      },
    });


const ProductModel = mongoose.model("product", ProductSchema)
module.exports = ProductModel