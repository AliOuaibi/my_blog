var express=require("express"); 
var bodyParser=require("body-parser"); 
var morgan = require('morgan')
const cors = require('cors')

const db = require('./db')
const billetRouter = require('./routes/billet-router')
const userRouter = require('./routes/user-router')

var app=express() 
app.use(morgan('dev'))

app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({ 
	extended: true
})); 
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/api', billetRouter, userRouter)

app.listen(4242, () => {
    console.log('Serveur en écoute sur le port 4242')
});
    