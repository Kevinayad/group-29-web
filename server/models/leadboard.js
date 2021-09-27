
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var leadboardSchema = new Schema ({
    name: { type: String},
    Ranking: { type: String},
    Points: { type: String}

});
module.exports = mongoose.model('leadboards', leadboardSchema);