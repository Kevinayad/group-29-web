var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema ({
    name: { type: String},
    gender: { type: String},
    height: {type : Number},
    weight: {type: Number},
    goals: { type: String},


});
module.exports = mongoose.model('users', userSchema);