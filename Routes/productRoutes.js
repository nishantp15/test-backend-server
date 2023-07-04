const mongoose = require('mongoose');
const express = require('express');
const productRouter = express.Router();
const {productModel} = require('../Models/productModel')

productRouter.get('/',async (req, res)=>{
    try{
        const productData = await productModel.find({});
        res.status(200).json({data: productData});
    }catch(err){
        console.log(err)
        res.status(500).send(err.message)
    }
});

    productRouter.get('/:id',async (req, res)=>{
        const id = req.params.id;
        try{
            const productData = await productModel.findById({_id:id});
            res.status(200).json({data:productData});
        }catch(err){
            console.log(err)
            res.status(500).send(err)
        }
    })

productRouter.post('/',async (req, res)=>{
    let data = req.body;
    try{
        const productData = await productModel.create({
            ...data
        });
        res.status(200).json(req.body);
    }catch(err){
        console.log(err)
        res.status(500).send(err.message)
    }
})

productRouter.patch('/:id',async (req, res)=>{
    let data = req.body;
    let id = req.params.id;
    console.log({...data})
    try{
        await productModel.findByIdAndUpdate(id,{...data});
        const productData = await productModel.findById(id)
        res.status(200).json(productData);
    }catch(err){
        console.log(err)
        res.status(500).send(err.message)
    }
})

productRouter.delete('/:id',async (req, res)=>{
    let data = req.body;
    let id = req.params.id;
    try{
        await productModel.findByIdAndDelete(id);
        res.status(200).json("deleted");
    }catch(err){
        console.log(err)
        res.status(500).send(err.message)
    }
})


module.exports = {productRouter};