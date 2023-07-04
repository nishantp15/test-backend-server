const mongoose = require('mongoose');

async function connectTODB(){
    await mongoose.connect('mongodb+srv://test-server:test123@cluster0.m9pijze.mongodb.net/api?retryWrites=true&w=majority')
}

module.exports = {connectTODB};