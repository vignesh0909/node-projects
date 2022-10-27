//coaches schema
const mongoose = require('mongoose');

var hotelsSchema = new mongoose.Schema({
    hotelName: { type: String, unique: true },
    description: { type: String, required: [true, 'Required field'] },
    amenities: { type: String, required: [true, 'Required field'] },
    phoneNo: { type: Number },
    address: { type: String },
    reviews: { type: Array }
});
var hotelsModel = mongoose.model("hotels", hotelsSchema);

module.exports = hotelsModel;