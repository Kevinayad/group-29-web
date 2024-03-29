var express = require('express');
var router = express.Router();
var Foodtrack = require('../models/foodtrack');

//Create foodtracker
router.post('/api/foodtracks', function (req, res, next) {
    var foodtrack = new Foodtrack(req.body);
    foodtrack.save(function (err, foodtracks) {
        if (err) { return next(err); }
        res.status(201).json(foodtracks);
    })
});
//Get all foodtrackers
router.get('/api/foodtracks', function (req, res, next) {
    Foodtrack.find(function (err, foodtracks) {
        if (err) { return next(err); }
        res.json({ "foodtracks": foodtracks });
    });
});
//Get food tracker by ID
router.get('/api/foodtracks/:_id', function (req, res, next) {
    var id = req.params._id;
    Foodtrack.findById(id, function (err, foodtracks) {
        if (err) { return next(err); }
        if (foodtracks == null) {
            return res.status(404).json({ "message": "food not found" });
        }
        res.json(foodtracks);
    });
});
//Put function by ID
router.put('/api/foodtracks/:_id', function (req, res, next) {
    var id = req.params._id;
    Foodtrack.findById(id, function (err, foodtracks) {
        if (err) { return next(err); }
        if (foodtracks == null) {
            return res.status(404).json({ "message": "food not found" });
        }
        foodtracks.name = req.body.name;
        foodtracks.protien = req.body.protien;
        foodtracks.carbs = req.body.carbs;
        foodtracks.fats = req.body.fats;
        foodtracks.save();
        res.json(foodtracks);
    });
});
//Patch function by ID
router.patch('/api/foodtracks/:_id', function (req, res, next) {
    var id = req.params._id;
    Foodtrack.findById(id, function (err, foodtracks) {
        if (err) { return next(err); }
        if (foodtracks == null) {
            return res.status(404).json({ "message": "foodtracks not found" });
        }
        foodtracks.protien = (req.body.protien || foodtracks.protien);
        foodtracks.carbs = (req.body.carbs || foodtracks.carbs);
        foodtracks.fats = (req.body.fats || foodtracks.fats);
        foodtracks.save();
        res.json(foodtracks);
    });
});
//Delete by ID
router.delete('/api/foodtracks/:_id', function (req, res, next) {
    var id = req.params._id;
    Foodtrack.findOneAndDelete({ _id: id }, function (err, foodtracks) {
        if (err) { return next(err); }
        if (foodtracks == null) {
            return res.status(404).json({ "message": "food not found" });
        }
        res.json(foodtracks);
    });
});
//Delete all
router.delete('/api/foodtracks/', function (req, res, next) {
    Foodtrack.remove({}, function (err, foodtracks) {
        if (err) { return next(err); }
        if (foodtracks == null) {
            return res.status(404).json({ "message": "food not found" });
        }
        res.json(foodtracks);
    });
});
module.exports = router;
    
