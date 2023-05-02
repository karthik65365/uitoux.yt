const express = require('express')
const mongoose  = require('mongoose');
const app = express()
const PORT = 3001
const usermodel = require("./models/usermodel")

app.use(express.json())
const uri="mongodb+srv://karthi65:karthi653@cluster0.x5v0cjb.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri, {useNewUrlParser : true, useUnifiedTopology:true})
const connection = mongoose.connection;
connection.once("open", () =>{console.log("database connect")})

app.get('/', (req, res) => {
    res.send('hello world!')
})

app.get('/users', (req, res) => {
    usermodel.find().then(Usermodel=>res.json(Usermodel)) 
})
app.listen(PORT, () => {
    console.log(`server running on localhost with port ${PORT}`)
})