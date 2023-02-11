const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = new Schema({
    name: String,
    email: String,
    password: String
});


const UserModel = mongoose.model('Userdata', Users);

module.exports = UserModel;