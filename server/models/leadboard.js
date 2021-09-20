
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var leadboardSchema = new Schema ({
    userID: { type: Number},
    name: { type: String},
    gender: { type: String},
    goals: { type: String}

});
module.exports = mongoose.model('leadboards', leadboardSchema);