//bookings schema
const mongoose = require('mongoose');

var ordersSchema = new mongoose.Schema({
  orderId: {type: Number},
  cartId: { type: String }
});

var ordersModel = mongoose.model("orders", ordersSchema);

module.exports = ordersModel;