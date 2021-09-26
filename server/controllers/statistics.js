var express = require('express');
var router = express.Router();
var Statistic = require('../models/statistic');

router.post('/api/statistics', function(req, res, next) {
    var statistic = new Statistic(req.body);
             statistic.save(function(err, statistic) {
                if (err) {return next(err);}
        res.status(201).json(statistic);
    });
});
router.get('api/statistics',function(req,res,next){
    Statistic.find(function(err,reminders){
        if(err){
            return next(err);
        }
        res.json({"statstics":statistics});
    });
});
router.get('api/statistics/:_id',function(req,res,next){
    var id = req.params._id;
    Statistic.findById(id,function(err,statistics){
        if(err){
            return next(err);
        }
        res.json({"statistics":statistics})
    })
})

    module.exports = router;
    