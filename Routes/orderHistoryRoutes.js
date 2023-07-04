const mongoose = require('mongoose');
const express = require('express');
const orderHistoryRouter = express.Router();
const {orderHistoryModel} = require('../Models/orderModel')

orderHistoryRouter.get('/',async (req, res)=>{
    try{
        const orderHistoryData = await orderHistoryModel.find({});
        res.status(200).json(orderHistoryData);
    }catch(err){
        console.log(err)
        res.status(500).send(err.message)
    }
})



orderHistoryRouter.post('/',async (req, res)=>{
    let data = req.body;
    try{
        const orderHistoryData = await orderHistoryModel.create({
            ...data
        });
        res.status(200).json(orderHistoryData);
    }catch(err){
        console.log(err)
        res.status(500).send(err.message)
    }
})

orderHistoryRouter.patch('/:id',async (req, res)=>{
    let data = req.body;
    let id = req.params.id;
    try{
        await orderHistoryModel.findByIdAndUpdate(id,{...data});
        const orderHistoryData = await orderHistoryModel.findById(id)
        res.status(200).json(orderHistoryData);
    }catch(err){
        console.log(err)
        res.status(500).send(err.message)
    }
})

orderHistoryRouter.delete('/:id',async (req, res)=>{
    let data = req.body;
    let id = req.params.id;
    try{
        await orderHistoryModel.findByIdAndDelete(id,{...data});
        res.status(200).json("deleted");
    }catch(err){
        console.log(err)
        res.status(500).send(err.message)
    }
})


module.exports = {orderHistoryRouter};