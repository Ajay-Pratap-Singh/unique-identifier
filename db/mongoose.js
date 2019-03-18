const mongoose = require('mongoose');
const { MONGO_URI } = require('../config/keys');
const mongoConnect = cb => {
  mongoose
    .connect(`${MONGO_URI}?retryWrites=true`, {
      useNewUrlParser: true
    })
    .then(result => {
      console.log('Connected to MongoDB');
      cb();
    })
    .catch(err => console.log(err));
};

module.exports = { mongoConnect };
