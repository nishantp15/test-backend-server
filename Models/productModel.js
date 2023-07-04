const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:String,
    price:Number,
    AvlQty:Number,
    unit:String
},
{ timestamps: true }
)

const productModel = mongoose.model('product', productSchema);

module.exports = {productModel};