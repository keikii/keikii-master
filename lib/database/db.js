var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

 mongoose.connect('mongodb://localhost/books',{ useMongoClient: true}).then(
    console.log('Mongoose Connected')
  ).catch((err) => {
    console.error(err);
  });

module.exports = mongoose;