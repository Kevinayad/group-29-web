var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reminderSchema = new Schema({
    name: {type:String},
    reminderText: {type:String},
    interval: {type:Number},
    userID: {type:String},
})
module.exports = mongoose.model('reminders',reminderSchema)