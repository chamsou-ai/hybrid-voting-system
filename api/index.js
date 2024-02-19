const express = require('express')
const upload = require('express-fileupload')
const cors = require('cors')
const connect = require('./connection')
const body_parser = require('body-parser')
const cookie = require('cookie-parser')
const Io = require('socket.io');

const app =express ()
const http = require('http');
const server = http.createServer(app);


//const sessionStore = new MySQLStore(con);

app.use(body_parser.urlencoded({extends:true}))
app.use(upload())
app.use(express.json())
app.use(cors())
app.use(cookie())

app.use('/get', require('./Routes/user'))

app.get('/',(req,res)=>{
    connect.query("SELECT * FROM users",(err,data)=>{
        res.send(data)
    })
})





server.listen(2000,()=>console.log('http://localhost:2000/'))