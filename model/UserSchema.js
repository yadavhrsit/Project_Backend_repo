const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = new Schema({
    email: String,
    password: String
});


const UserModel = mongoose.model('Userdata', Users);

module.exports = UserModel;