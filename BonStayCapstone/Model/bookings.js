//bookings schema
const mongoose = require('mongoose');

var bookingsSchema = new mongoose.Schema({
  bookingId: {type: String},
  StartDate: { type: Date },
  EndDate: { type: Date },
  NoOfPersons: { type: Number },
  NoOfRooms: { type: Number },
  TypeOfRoom: { type: String }
});

var bookingsModel = mongoose.model("bookings", bookingsSchema);

module.exports = bookingsModel;