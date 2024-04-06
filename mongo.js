const mongoose = require('mongoose');

const mongoDBURL = 'mongodb://localhost:27017/test';
mongoose.connect(mongoDBURL, {
  })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.log('MongoDB connection error', error);
  });

  const Loginschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
      type: String,
      required: true
  },
    password: {
        type: String,
        required: true
    }
});

// collection part
const collection = new mongoose.model("startup_logs", Loginschema);

module.exports = collection;