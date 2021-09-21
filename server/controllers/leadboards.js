var express = require('express');
var router = express.Router();
var Leadboard = require('../models/leadboard');

router.post('/api/leadboards', function(req, res, next) {
    var leadboard = new Leadboard(req.body);
             leadboard.save(function(err, leadboard) {
                if (err) {return next(err);}
        res.status(201).json(leadboard);
    })
    });

    module.exports = router;
    
