const mongoose = require('mongoose');
require("dotenv").config()
console.log("Hello", process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/outgrown', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose Connected')
})

module.exports = mongoose.connection;
