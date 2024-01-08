const mongoose = require("mongoose")

const Client =  mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phNo:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },


},  {
        timestamp:true
    }
)

module.exports = mongoose.model("Client",Client);