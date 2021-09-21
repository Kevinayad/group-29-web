var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodtrackSchema = new Schema ({
    name: { type: String},
    gender: { type: String},
    goals: { type: String}

});
module.exports = mongoose.model('foodtracks', foodtrackSchema);

