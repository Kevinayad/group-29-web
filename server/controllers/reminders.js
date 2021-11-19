var express = require('express');
var router = express.Router();
var Reminder = require('../models/reminder');

//Post/add to database
router.post('/api/reminders',function(req,res,next){
    var reminder = new Reminder(req.body);
    reminder.save(function(err, reminder){
        if(err){
            return next(err);
        }
        res.status(201).json(reminder);
    });
});
//Get all
/*router.get('/api/reminders',function(req,res,next){
    Reminder.find(function(err,reminders){
        if(err){
            return next(err);
        }
        res.json({"reminders":reminders});
    });
});*/
router.get('/api/reminders',function(req,res,next){
    var filterInterval = req.query.interval;
    console.log(filterInterval);
    if(filterInterval!=null){
        Reminder.find({interval:filterInterval},function(err, reminders){
            if(err){
               return next(err);
            }
            res.json({"reminders":reminders})
        })
    }else{
        Reminder.find(function(err,reminders){
            if(err){
                return next(err);
            }
            res.json({"reminders":reminders});
        });
    }
    
    
});
//Get by ID
router.get('/api/reminders/:_id',function(req,res,next){
    var id = req.params._id;
    Reminder.findById(id,function(err,reminders){
        if(err){
            return next(err);
        }
        res.json({"reminders":reminders})
    });
});
//Delete all
router.delete('/api/reminders',function(req,res,next){
    Reminder.deleteMany({},function(err,reminders){
        if(err){
            return next(err);
        }
        if(reminders==null){
            return res.status(404).json({"message":"Reminder not found"});
        }
        res.json(reminders);
    });

});
//Delete by ID
router.delete('/api/reminders/:_id',function(req,res,next){
    var id = req.params._id;
    Reminder.findOneAndDelete({_id:id},function(err,reminders){
        if(err){
            return next(err);
        }
        res.json(reminders);
    });
    
});
//Patch funtion
router.patch('/api/reminders/:_id',function(req,res,next){
    var id = req.params._id;
    Reminder.findById(id,function(err,reminders){
        if(err){
            return next(err);
        }
        if(reminders == null){
            return res.status(404).json({"message":"Reminder not found"});
        }
        reminders.reminderText = (req.body.reminderText || reminders.reminderText);
        reminders.interval = (req.body.interval || reminders.interval);
        reminders.save();
        res.json(reminders);

    });
});
//Delete by ID
router.delete('api/reminders/:_id', function(req,res, next){
    var id = req.params._id;
    Reminder.findOneAndDelete({_id:id}, function(err,reminders){
        if(err){
            return next(err);
        }
        if(reminders==null){
            return res.status(404).json({"message":"Reminder not found"});
        }
        res.json(reminders);
    });
});
//Create reminder for specific user
router.post('/api/users/:_id/reminders', function (req, res, next) {
    var _id = req.params._id;
    User.findById(id, function(err, user) {
        if (err) {
            return next(err);
        }
        if (user === null) {
            return res.status(404).json({
                message: "User does not exist",
            });
        } else {
            var reminder = new Reminder({
                name: req.body.name,
                reminderText: req.body.reminderText,
                interval: req.body.interval,
                users: id,
            });
            reminder.save(function(err, reminder) {
                if (err) {
                    return console.error(err);
                }
                res.status(201).json(reminder);
                console.log(req.body);
                //  console.log('recipe id is %s', ingredient.recipes._id);
            });
        }
    });
});
//Get all reminders of specific user
router.get('/api/users/:_id/reminders', function (req, res, next) {
    var _id = req.params._id;
    Reminder.findById(_id, function (err, reminder) {
        if (err) { 
            return next(err); 
        }
        if (recipe === null) {
            return res.status(404).json({
                message: "Reminder does not exist",
            });
        } else {
            Reminder.find({
                users: id,
            }).exec(function(err, reminder) {
                if (err) {
                    return next(err);
                }
                res.json({
                    reminders: reminder,
                });
            });
        }
    });
});
//Get specific reminder from specific user
router.get('/api/users/:_id/reminders/:remid', function (req, res, next) {
    var id = req.params.remid;
    Reminder.findById(id, function (err, reminders) {
        if (err) { 
            return next(err); 
        }
        if (reminders == null) {
            return res.status(404).json({ 
                message: "reminder not found",
             });

        } res.json({ "reminders": reminders });
    });

});
//Delete specific reminder from specific user
router.delete('/api/users/:_id/reminders/:remid', function (req, res, next) {
    var id = req.params.remid;
    Reminder.findOneAndDelete(id, function (err, reminders) {
        if (err) { return next(err); }
        if (reminders == null) {
            return res.status(404).json({ "message": "reminder not found" });

        } res.json({ "reminders": reminders });
    });

});
module.exports = router;