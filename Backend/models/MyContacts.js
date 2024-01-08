const mongoose = require('mongoose')

const MyContacts = mongoose.Schema({
    MyId :{
        type:String,
        required:[true,"This feild is required"]
    },
    name:{
        type:String,
        required:[true,"This feild is required"]
    },
    image:{
        type:String,
        required:[true,"This feild is required"]
    },
    phno:{
        type:String,
        required:[true,"This feild is required"]
    },
})

module.exports = mongoose.model("MyContacts",MyContacts)