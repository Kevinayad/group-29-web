var express = require('express');
var router = express.Router();
var User = require('../models/user');


router.post('/api/users', function(req, res, next) {
    var user = new User(req.body);
             user.save(function(err, user) {
                if (err) {return next(err);}
        res.status(201).json(user);
    })
    });
    router.get('/api/users', function(req, res, next) {
        User.find(function(err, users) {
            if (err) { return next(err); }
            res.json({"users": users});
        });
    });
    
    

    module.exports = router;
