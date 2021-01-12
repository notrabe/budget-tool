require('dotenv').config()
const path  = require('path')
const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require('./config/db-config')

connectDB()

const app = express()

app.use(express.json())

const transactionsRouter = require('./routes/transactions-router')

app.use('/api/transactions', transactionsRouter)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })

    // app.use('*', express.static(path.join(__dirname, "client", "build")))
}

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => res.send('Hello'))

app.listen(PORT, console.log(`Server is running on port ${PORT}`.blue.bold))