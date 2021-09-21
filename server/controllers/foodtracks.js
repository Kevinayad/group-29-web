var express = require('express');
var router = express.Router();
var Foodtrack = require('../models/foodtrack');

router.post('/api/foodtracks', function(req, res, next) {
    var foodtrack = new Foodtrack(req.body);
             foodtrack.save(function(err, foodtrack) {
                if (err) {return next(err);}
        res.status(201).json(foodtrack);
    })
    });

    module.exports = router;
    
