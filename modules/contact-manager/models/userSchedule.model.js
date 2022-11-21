const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userScheduleSchema = new Schema({
    scheduleTitle: String,
    scheduleContent: String,
    scheduleTime: String,
    scheduleDate: String,
    createdOnDate: String,
    userId: String
});

// ******* Below Export Format *******
// @userScheduleModel    : Model Name, 
// @userScheduleSchema   : schema name, 
// @schedules        : collection name in mongoDb
module.exports = mongoose.model('userScheduleModel', userScheduleSchema, 'schedules');