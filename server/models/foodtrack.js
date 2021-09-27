var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodtrackSchema = new Schema ({
    name: { type: String},
    protien: { type: Number},
    carbs: { type: Number},
    fats: { type: Number}
});
module.exports = mongoose.model('foodtracks', foodtrackSchema);

