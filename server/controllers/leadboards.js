var express = require('express');
var router = express.Router();
var Leadboard = require('../models/leadboard');

// creating new leaderboard
router.post('/api/leadboards', function (req, res, next) {
    var leadboard = new Leadboard(req.body);
    leadboard.save(function (err, leadboards) {
        if (err) { return next(err); }
        res.status(201).json(leadboards);
    })
});
/*router.get('/api/leadboards', function(req, res, next) {Leadboard.find(function(err, leadboards) {
    if (err) { return next(err); }
    res.json({"leadboards": leadboards});
    });
});*/
router.get('/api/leadboards', function (req, res, next) {
    Leadboard.find(function (err, leadboards) {
        if (err) {
            return next(err);
        }
        leadboards.sort((a, b) => (a.Points < b.Points) ? 1 : -1);
        res.json({ "leadboards": leadboards });
    });
});

//Get leaderboard with a certain id
router.get('/api/leadboards/:_id', function (req, res, next) {
    var id = req.params._id;
    Leadboard.findById(id, function (err, leadboards) {
        if (err) { return next(err); }
        if (leadboards == null) {
            return res.status(404).json({ "message": "Leaderboard not found" });
        }
        res.json(leadboards);
    });
});



//Put function by id
router.put('/api/leadboards/:_id', function (req, res, next) {
    var id = req.params._id;
    Leadboard.findById(id, function (err, leadboards) {
        if (err) { return next(err); }
        if (leadboards == null) {
            return res.status(404).json({ "message": "Leaderboard not found" });
        }
        leadboards.name = req.body.name;
        leadboards.Ranking = req.body.Ranking;
        leadboards.Points = req.body.Points;
        leadboards.save();
        res.json(leadboards);
    });
});
//Patch function by id
router.patch('/api/leadboards/:_id', function (req, res, next) {
    var id = req.params._id;
    Leadboard.findById(id, function (err, leadboards) {
        if (err) { return next(err); }
        if (leadboards == null) {
            return res.status(404).json({ "message": "Leaderboard not found" });
        }
        leadboards.Ranking = (req.body.Ranking || leadboards.Ranking);
        leadboards.Points = (req.body.Points || leadboards.Points);
        leadboards.save();
        res.json(leadboards);
    });
});
//Delete by ID
router.delete('/api/leadboards/:_id', function (req, res, next) {
    var id = req.params._id;
    Leadboard.findOneAndDelete({ _id: id }, function (err, leadboards) {
        if (err) { return next(err); }
        if (leadboards == null) {
            return res.status(404).json({ "message": "Leaderboard not found" });
        }
        res.json(leadboards);
    });
});
//Delete all
router.delete('/api/leadboards/', function (req, res, next) {
    Leadboard.remove({}, function (err, leadboards) {
        if (err) { return next(err); }
        if (leadboards == null) {
            return res.status(404).json({ "message": "Leaderboard not found" });
        }
        res.json(leadboards);
    });
});
module.exports = router;

