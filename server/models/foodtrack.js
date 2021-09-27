var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodtrackSchema = new Schema ({
    foodName: { type: String},
    calories: { type: Number},
    color: { type: String}

});
module.exports = mongoose.model('foodtracks', foodtrackSchema);

