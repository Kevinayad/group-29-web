var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema ({
    name: { type: String},
    gender: { type: String},
    goals: { type: String}

});
module.exports = mongoose.model('users', userSchema);