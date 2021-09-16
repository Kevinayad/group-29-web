var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var leadboardSchema = new Schema ({
    userID: { type: Number},
    name: { type: String},
    gender: { type: String},
    goals: { type: String}

});
var Leadboard = mongoose.model('leadboards', leadboardSchema);

router.post('/api/leadboards', function(req, res, next) {
    var leadboard = new Leadboard({ 
            "userID": 2,
            "name": "Anna",
            "gender": "Female",
            "goals": "Insert goal"
             
             })
             leadboard.save(function(err, leadboard) {
                if (err) {return console.error(err);}
             })
        res.status(201).json(leadboard);
    });

    module.exports = router;
    
