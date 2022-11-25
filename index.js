const express = require('express')
const mongoose =require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const router = require('./routes/userroute')

mongoose.connect("mongodb://127.0.0.1:27017/config", {useNewUrlParser: true, useUnifiedTopology: true});

const db=mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('DB database connection is established')
})

const app=express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/uploads', express.static('uploads'))

app.get('/test',(req,res)=>{
    res.send("hello from backend");
});

const PORT= process.env.PORT || 8080



app.listen(PORT,() => {
    console.log('server is running on port ${PORT}')
})
app.use('/user', router)
