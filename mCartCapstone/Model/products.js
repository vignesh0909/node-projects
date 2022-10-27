//coaches schema
const mongoose = require('mongoose');

var productsSchema = new mongoose.Schema({
    productId: { type: Number, unique: true },
    productName: { type: String, required: [true, 'Required field'] },
    productCode: { type: String, required: [true, 'Required field'] },
    description: { type: String },
    price: { type: Number },
    rating: { type: Number },
    manufacturer: { type: String },
    osType: { type: String }
});
var productsModel = mongoose.model("products", productsSchema);

module.exports = productsModel;