const express = require('express')
const app = express()
require('dotenv').config()
const  path = require('path')
var cors = require('cors')

app.use(cors())
const db = require('./db')
app.use(express.json());

const userRoute = require('./routes/userRoute')
const resumeModRoutes = require('./routes/resumeModRoute')

app.use('/api',userRoute)
app.use('/api',resumeModRoutes)


const __dirname1 = path.resolve();
if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname1,'client/build')));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname1,"client","build","index.html"))
    })
}
else{
    app.get('/',(req,res)=>{
        res.send('api running')
    })
}

var server_port = process.env.YOUR_PORT || process.env.PORT || 8000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
 
app.listen(server_port, server_host,(req,res)=>{
    console.log("Server is running :]")
})