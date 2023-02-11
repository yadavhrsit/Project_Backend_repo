const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Collections = new Schema({
    Collection: String,
    image: String
});


const CollectionModel = mongoose.model('Collections', Collections);

module.exports = CollectionModel;