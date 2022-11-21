const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userRegistrationSchema = new Schema({
    email: String,
    password: String,
    name: String,
    phoneNumber: Number,
    registrationDate: String
});

// ******* Below Export Format *******
// @userRegistrationModel    : Model Name, 
// @userRegistrationSchema   : schema name, 
// @users        : collection name in mongoDb
module.exports = mongoose.model('userRegistrationModel', userRegistrationSchema, 'users');