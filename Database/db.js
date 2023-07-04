const mongoose = require('mongoose');

async function connectTODB(){
    await mongoose.connect('mongodb://localhost:27017/agami')
}

module.exports = {connectTODB};