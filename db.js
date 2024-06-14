const mongoose = require('mongoose')
mongoose
  .connect('mongodb://localhost:27017/form-database')
  .then(() => {
    console.log('Connection successful')
  })
  .catch((err) => {
    console.log(
      'There was a problem trying to connect to mongodb, error is' + err
    )
  })
module.exports = mongoose
