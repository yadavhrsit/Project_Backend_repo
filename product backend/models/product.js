const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Productinfo = new Schema({
    name: String,
    price: Number,
    img: [String],
     product: [{
        type: mongoose.Schema.Types.objectId,
        ref: collectionModel
    }]
})

const ProductModel = mongoose.model('Product', Productinfo);

module.exports = ProductModel;
