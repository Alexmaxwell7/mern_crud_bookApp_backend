const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const url = 'mongodb://localhost/BookDB'

const app = express()

app.use(cors())

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const bookRouter = require('./routes/book')
app.use('/book',bookRouter)

app.listen(5000, () => {
    console.log('Server started')
})