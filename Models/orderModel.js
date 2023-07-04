const mongoose = require('mongoose');

const orderHistorySchema = mongoose.Schema({
    name:String,
    address:String,
    phone:String,
    user:{
        id:mongoose.Types.ObjectId,
        name:String
    },
    orderHistory:[{id:mongoose.Types.ObjectId,name:String,qty:Number}]
},
{ timestamps: true })

const orderHistoryModel = mongoose.model('orderHistory', orderHistorySchema);

module.exports = {orderHistoryModel};