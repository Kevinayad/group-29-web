var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodtrackSchema = new Schema ({
    name: { type: String},
    protien: { type: String},
    carbs: { type: String},
    fats: { type: String}
});
module.exports = mongoose.model('foodtracks', foodtrackSchema);

