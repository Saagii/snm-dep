const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const loginSchema = new Schema({
    email: String,
    password: String
});

// ******* Below Export Format *******
// @userModel    : Model Name, 
// @userSchema   : schema name, 
// @users        : collection name in mongoDb
module.exports = mongoose.model('loginModel', loginSchema, 'users');