const mongoose = require('mongoose')
const tasks = mongoose.model('tasks', {
  title: { type: String },
  stats: { type: String },
})
module.exports = tasks
