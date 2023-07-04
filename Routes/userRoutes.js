const mongoose = require("mongoose");
const express = require("express");
const userRouter = express.Router();
const { userModel } = require("../Models/userModel");

userRouter.get("/", async (req, res) => {
  try {
    const userData = await userModel.find({});
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

userRouter.post("/login", async (req, res) => {
  let {email} = req.body;
    
  try {
    const user = await userModel.find({email});
    console.log(user);
    if (user) {
      // // throw new Error("user already exist");
      res.status(200).json(user[0]);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

userRouter.post("/", async (req, res) => {
  let data = req.body;
  //     const user = await userModel.findOne(data.email);
  //     console.log(user)
  //    if(user){
  //     // // throw new Error("user already exist");
  //     return res.status(500).send("user already exist")
  //    }
  try {
    const userData = await userModel.create({
      ...data,
    });
    res.status(200).json(req.body);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

userRouter.patch("/:id", async (req, res) => {
  let data = req.body;
  let id = req.params.id;
  try {
    await userModel.findByIdAndUpdate(id, { ...data });
    const userData = await userModel.findById(id);
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

userRouter.delete("/:id", async (req, res) => {
  let data = req.body;
  let id = req.params.id;
  try {
    await userModel.findByIdAndDelete(id, { ...data });
    res.status(200).json("deleted");
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

module.exports = { userRouter };
