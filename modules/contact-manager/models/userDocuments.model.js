const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userDocumentsSchema = new Schema({
    documentName: String,
    documentType: String,
    documentUrl: String,
    documentUploadedDate: String,
    img:
    {
        data: Buffer,
        contentType: String
    },
    userId: String
});

// ******* Below Export Format *******
// @userDocumentModel    : Model Name, 
// @userDocumentsSchema   : schema name, 
// @userDocuments        : collection name in mongoDb
module.exports = mongoose.model('userDocumentModel', userDocumentsSchema, 'userDocuments');