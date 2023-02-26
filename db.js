const mongoose = require('mongoose')
require('dotenv').config()

var mongourl = process.env.MONGO_URL

mongoose.connect(mongourl,{
    useUnifiedTopology:true,
    useNewUrlParser: true
})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('mongoDB connected :]')
})

db.on('error' ,()=>{
    console.log("mongoDB connection failed")
})

module.exports = mongoose