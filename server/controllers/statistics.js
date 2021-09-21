var express = require('express');
var router = express.Router();
var Statistic = require('../models/statistic');

router.post('/api/statistics', function(req, res, next) {
    var statistic = new Statistic(req.body);
             statistic.save(function(err, statistic) {
                if (err) {return next(err);}
        res.status(201).json(statistic);
    })
    });

    module.exports = router;
    