//bookings schema
const mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({
  cartId: {type: Number},
  username: { type: String },
  productsInCart: { type: String },
  statusOfCart: { type: String }
});

var cartModel = mongoose.model("cart", cartSchema);

module.exports = cartModel;