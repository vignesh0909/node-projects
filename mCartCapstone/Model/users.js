const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/mCart')
  .then(() => console.log('DB connection successful!'));

//Schema
var usersSchema = new mongoose.Schema({
  username: { type: String, required: [true, 'Required field'] },
  password: { type: String, required: [true, 'Required field'] },
  email: { type: String },
  phoneNumber: { type: Number }
});

var usersModel = mongoose.model("users", usersSchema);

module.exports = usersModel;