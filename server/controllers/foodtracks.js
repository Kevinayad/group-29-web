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

    
        router.get('/api/foodtracks', function(req, res, next) {
           Foodtrack.find(function(err, foodtracks) {
            if (err) { return next(err); }
            res.json({"foodtracks": foodtracks});
                });
            });
    module.exports = router;
    
