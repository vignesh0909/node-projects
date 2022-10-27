//coaches schema
const mongoose = require('mongoose');

var coachesSchema = new mongoose.Schema({
    coachId: { type: String, unique: true },
    name: { type: String, required: [true, 'Required field'] },
    password: { type: String, required: [true, 'Required field'] },
    dateOfBirth: { type: Date },
    gender: { type: String },
    mobileNumber: { type: Number },
    specialty: { type: String },
});
var coachesModel = mongoose.model("coaches", coachesSchema);

module.exports = coachesModel;