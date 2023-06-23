const mongoose= require( 'mongoose');
const CartModel =require('../models/cartModels')

class cartManagerDb {
  constructor() {
    this.model =  CartModel;
  }
}


module.exports = cartManagerDb;