
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var statisticSchema = new Schema ({
    type: { type: String},
    timespan: { type: String},
    name: { type: String},
    goal: { type: String}

});
module.exports = mongoose.model('statistics', statisticSchema);

