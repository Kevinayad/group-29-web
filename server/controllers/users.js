var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Reminder = require('../models/reminder');
router.post('/api/users', function(req, res, next) {
    var user = new User(req.body);
             user.save(function(err,users) {
                if (err) {return next(err);}
        res.status(201).json(user);
    })
    });
    router.post('/api/users/:_id/reminders', function(req, res, next) {
        
        var reminder = new Reminder(req.body);
        reminder.user_id = req.params._id;
        reminder.save(function(err, reminder){
            if(err){
                return next(err);
            }
            res.status(201).json(reminder);
        })
        });
    router.get('/api/users', function(req, res, next) {
        User.find(function(err, users) {
            if (err) { return next(err); }
            res.json({"users": users});
        });
    });
    router.get('/api/users/:_id/reminders', function(req, res, next) {
        Reminder.find(function(err, reminders) {
            if (err) { return next(err); }
            res.json({"reminders": reminders});
        });
    });
    router.get('/api/users/:_id/reminders/:remid', function(req, res, next) {
        var id = req.params.remid;
            Reminder.findById(id, function(err, reminders) {
                if (err) { return next(err); }
                if (reminders == null) {
                    return res.status(404).json({"message": "reminder not found"});
                
            } res.json({"reminders": reminders});});
            
    });
    router.delete('/api/users/:_id/reminders/:remid', function(req, res, next) {
        var id = req.params.remid;
            Reminder.findOneAndDelete(id, function(err, reminders) {
                if (err) { return next(err); }
                if (reminders == null) {
                    return res.status(404).json({"message": "reminder not found"});
                
            } res.json({"reminders": reminders});});
            
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
        router.put('/api/users/:_id', function(req, res, next) {
            var id = req.params._id;
            User.findById(id, function(err, users) {
                if (err) { return next(err); }
                if (users == null) {
                    return res.status(404).json({"message": "user not found"});
                }
                users.name = req.body.name;
                users.gender = req.body.gender;
                users.height = req.body.height;
                users.weight = req.body.weight;
                users.goals = req.body.goals;
                users.save();
                res.json(users);
            });
        });

        router.patch('/api/users/:_id', function(req, res, next) {
            var id = req.params._id;
            User.findById(id, function(err, users) {
                if (err) { return next(err); }
                if (users == null) {
                    return res.status(404).json({"message": "users not found"});
                }
                users.height = (req.body.height || users.height);
                users.weight = (req.body.weight || users.weight);
                users.save();
                res.json(users);
            });
        });
        router.delete('/api/users/:_id', function(req, res, next) {
            var id = req.params._id;
            User.findOneAndDelete({_id: id}, function(err, users) {
                if (err) { return next(err); }
                if (users == null) {
                    return res.status(404).json({"message": "user not found"});
                }
                res.json(users);
            });
        });
        router.delete('/api/users/', function(req, res, next) {
            User.remove({}, function(err, users) {
                if (err) { return next(err); }
                if (users == null) {
                    return res.status(404).json({"message": "user not found"});
                }
                res.json(users);
            });
        });
    

module.exports = router;
