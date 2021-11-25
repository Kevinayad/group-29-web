var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema ({
    name: { type: String},
    gender: { type: String},
    height: {type : String},
    weight: {type: String},
    goals: { type: String},


});
module.exports = mongoose.model('users', userSchema);