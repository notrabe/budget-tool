require('dotenv').config()
const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require('./config/db-config')

connectDB()

const app = express()

const transactionsRouter = require('./routes/transactions-router')

app.use('/api/transactions', transactionsRouter)

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => res.send('Hello'))

app.listen(PORT, console.log(`Server is running on port ${PORT}`.blue.bold))