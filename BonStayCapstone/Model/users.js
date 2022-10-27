const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/BonstayDB')
  .then(() => console.log('DB connection successful!'));

//Schema
var usersSchema = new mongoose.Schema({
  userId: { type: String, required: [true, 'Required field'] },
  name: { type: String, required: [true, 'Required field'] },
  password: { type: String, required: [true, 'Required field'] },
  email: { type: String },
  phoneNo: { type: Number },
  address: { type: String },
  userBookings: { type: Array }
});

var usersModel = mongoose.model("users", usersSchema);

module.exports = usersModel;