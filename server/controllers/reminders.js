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
router.get('/api/reminders',function(req,res,next){
    Reminder.find(function(err,reminders){
        if(err){
            return next(err);
        }
        res.json({"reminders":reminders})
    });
});
//Get by ID
router.get('/api/reminders/:_id',function(req,res,next){
    id = req.params._id;
    Reminder.findById(id,function(err,reminders){
        if(err){
            return next(err);
        }
        res.json({"reminders":reminders})
    });
});
//Delete all
router.delete('/api/reminders',function(req,res,next){
    Reminder.deleteMany(function(err){
        if(err){
            return next(err);
        }
        res.status(201).json(Reminder);
    });

});
//Delete by ID
router.delete('/api/reminders/:_id',function(req,res,next){
    id = req.params._id;
    Reminder.findOneAndDelete({_id:id},function(err,reminders){
        if(err){
            return next(err);
        }
        res.status(201).json(Reminder);
    });
    
});
module.exports = router;