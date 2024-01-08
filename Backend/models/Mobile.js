const mongoose = require('mongoose')

const Phone = mongoose.Schema({
    number:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model('Phone',Phone)