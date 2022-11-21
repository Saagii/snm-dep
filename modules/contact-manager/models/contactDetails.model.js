const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactDetailsSchema = new Schema({
    contactType: String,
    firstName: String,
    lastName: String,
    company: String,
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    pincode: Number,
    country: String,
    workPhoneNumber: Number,
    personalPhoneNumber: Number,
    primaryEmailId: String,
    alternateEmailId: String,
    createdOnDate: String,
    isFavourite: Boolean,
    isActive: Boolean
});

// ******* Below Export Format *******
// @userModel    : Model Name, 
// @userSchema   : schema name, 
// @users        : collection name in mongoDb
module.exports = mongoose.model('contactDetailsModel', contactDetailsSchema, 'contacts');