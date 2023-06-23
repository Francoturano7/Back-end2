const mongoose= require( 'mongoose');
const ProductModel =require('../models/productModels')

class productManagerDb {
  constructor() {
    this.model =  ProductModel;
  }

  async getProducts() {
    try {
      const all = await this.model.find({}).lean();
      return all;
    } catch (err) {
      throw new Error(err);
    }
  }

  async getProductById(id) {
    try {
      const productById  = await this.model.findById(id);
      return  productById ? productById : "Product not found"
     
    } catch (err) {
      throw new Error(err);
    }
  }

  async addProduct(product) {
    // console.log(product);
    try {
        const { title, description, code, price, stock, category, thumbnails, status } = product
        const products = await this.getProducts()
        console.log(products.some(prod => prod.code == code))
        if (!title || !description || !code || !price || !stock || !category) {
            return "All fields are required"
        }
        if (products.some(prod => prod.code == code)) {
            return "Invalid product duplicate code"
        }
      const newDoc = await this.model.create(product);
      return "Product added successfully";
    } catch (err) {
      throw new Error(err);
    }
  }

  async updateProduct(id, product) {
    try {
        const productById  = await this.model.findById(id);
       
        if (!productById) {
            return "Product not found"
        }
        if (product.id) {
            return "Cannot modify id field"
        }
      await this.model.findByIdAndUpdate(id, product);
      const docUpdated = await this.model.findById(id);
      return "Product updated successfully";
    } catch (err) {
      throw new Error(err);
    }
  }

  async deleteProducts(id) {
    try {
        const productById  = await this.model.findById(id);
       
        if (!productById) {
            return "Product not found"
        }
      const deletedDoc = await this.model.findByIdAndDelete(id);
      return "Product deleted successfully";
    } catch (err) {
      throw new Error(err);
    }
  }
}


module.exports = productManagerDb;