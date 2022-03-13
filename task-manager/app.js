const express = require('express')

const connectDB = require('./db/connect')
require('dotenv').config()

const tasks = require('./routes/tasks.js')

const notFound = require('./middleware/not-found.js')
const errorHandler = require('./middleware/error-handler.js')

const app = express()
const port = process.env.PORT || 3000

// middleware
app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandler)

// routes

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => console.log(`Server listening on port ${port}!`))
  } catch (error) {
    console.log(error)
  }
}

start()
