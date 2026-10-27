const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    imageUrl: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    detail: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        require: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Product", productSchema);