const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  };
  // Connect to the Mongo DB
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/infiniteWellness', options).then(
      () => {
          console.log("db connected")
      },
      err => {
          console.log('error conecting to db');
          console.log(err)
      }
  );

  module.exports = mongoose.connection;