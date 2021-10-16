var express = require('express');
var router = express.Router();
var Statistic = require('../models/statistic');

// Post function
router.post('/api/statistics', function(req, res, next) {
    var statistic = new Statistic(req.body);
             statistic.save(function(err, statistic) {
                if (err) {return next(err);}
        res.status(201).json(statistic);
    });
});
// Get all function
router.get('/api/statistics',function(req,res,next){
    Statistic.find(function(err,statistics){
        if(err){
            return next(err);
        }
        res.json({"statstics":statistics});
    });
});
// Get by ID function
router.get('/api/statistics/:_id',function(req,res,next){
    var id = req.params._id;
    Statistic.findById(id,function(err,statistics){
        if(err){
            return next(err);
        }
        res.json({"statistics":statistics})
    });
});
// Delete all function
router.delete('/api/statistics',function(req,res,next){
    Statistic.deleteMany({},function(err,statistics){
        if(err){
            return next(err);
        }
        if(statistics==null){
            return res.status(404).json({"message":"Statistic not found"})
        }
        res.json(statistics);
    });
});
// Delete by ID
router.delete('/api/statistics/:_id',function(req,res,next){
    var id = req.params._id;
    Statistic.findOneAndDelete({_id:id},function(err,statistics){
        if(err){
            return next(err);
        }
        res.json(statistics);
    });
});
// Put function
router.put('/api/statistics/:_id',function(req,res,next){
    var id = req.params._id;
    Statistic.findById(id,function(err,statistics){
        if(err){
            return next(err);
        }
        if (statistics==null){
            return res.status(404).json({"message":"Statistic not found"})
        }
        statistics.name = req.body.name;
        statistics.gender = req.body.gender;
        statistics.goals = req.body.goals;
        statistics.save();
        res.json(statistics);
    });
});
// Patch function
router.patch('/api/statistics/:_id',function(req,res,next){
    var id = req.params._id;
    Statistic.findById(id,function(err,statistics){
        if(err){
            return next(err);
        }
        if(statistics==null){
            return res.status(404).json({"message":"Statistic not found"})
        }
        statistics.name = (req.body.name || statistics.name);
        statistics.gender = (req.body.gender || statistics.gender);
        statistics.goals = (req.body.goals || statistics.goals);
        statistics.save();
        res.json(statistics);
    })
})

    module.exports = router;
    