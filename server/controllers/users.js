var express = require('express');
var router = express.Router();
var User = require('../models/user');
router.post('/api/users', function(req, res, next) {
    var user = new User(req.body);
             user.save(function(err,users) {
                if (err) {return next(err);}
        res.status(201).json(user);
    })
    });

    
    router.get('/api/users', function(req, res, next) {User.find(function(err, users) {
        if (err) { return next(err); }
        res.json({"users": users});});});

        router.get('/api/users/:_id', function(req, res, next) {
            var id = req.params._id;
            User.findById(id, function(err, users) {
                if (err) { return next(err); }
                if (users == null) {
                    return res.status(404).json({"message": "user not found"});
                }
                res.json(users);
            });
        });
        
    

module.exports = router;
