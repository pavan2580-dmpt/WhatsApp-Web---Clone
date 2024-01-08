const mongoose = require('mongoose');

const DB=async()=>{
    await  mongoose.connect('mongodb+srv://pavanganesh:pavanganesh@cluster0.axrs7n2.mongodb.net/WhatApp-clone?retryWrites=true&w=majority').then(
       ()=>{console.log("connected to database...")}
   ).catch(
       (err)=>{console.log("An error occured while connecting to database...")}
   )
   
}
module.exports = DB;