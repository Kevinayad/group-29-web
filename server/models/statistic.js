var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var statisticSchema = new Schema ({
    type: { type: String},
    timespan: { type: String}

});
module.exports = mongoose.model('statistics', statisticSchema);

