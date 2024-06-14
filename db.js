const mongoose = require('mongoose')
mongoose
  .connect(
    'mongodb+srv://durgeshkuchimern:mx2YVmttRdJzrJTY@form-database.rowa7wy.mongodb.net/'
  )
  .then(() => {
    console.log('Connection successful')
  })
  .catch((err) => {
    console.log(
      'There was a problem trying to connect to mongodb, error is' + err
    )
  })
module.exports = mongoose
