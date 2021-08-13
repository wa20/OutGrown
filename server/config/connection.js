const mongoose = require('mongoose');
//  require("dotenv").config()

mongoose.connect(
  process.env.MONGODB_URI || 
  'mongodb://localhost/outgrown', {

  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
// console.log("Hello", process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
  console.log('Mongoose Connected')
})

module.exports = mongoose.connection;
