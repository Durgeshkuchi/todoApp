const express = require('express')
const mongoose = require('./db')
const cors = require('cors')
const taskController = require('./controllers/taskController')
const path = require('path')
const app = express()
app.use(cors())
app.use(express.json())
app.listen(3000, () => {
  // 1
  console.log('server started at post 3000...')
}) // 2
app.use('/tasks', taskController)
app.use(express.static(path.join(__dirname, 'build')))
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
