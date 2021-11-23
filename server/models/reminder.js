var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reminderSchema = new Schema({
    name: {type:String},
    reminderText: {type:String},
    interval: {type:String},
    user_id: {type:String}
})
module.exports = mongoose.model('reminders',reminderSchema)