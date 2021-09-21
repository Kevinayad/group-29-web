
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var statisticSchema = new Schema ({
    name: { type: String},
    gender: { type: String},
    goals: { type: String}

});
module.exports = mongoose.model('statistics', statisticSchema);

