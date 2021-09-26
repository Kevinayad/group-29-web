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
        res.json({"reminders":reminders});
    });
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
        res.status(201).json(reminders);
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
module.exports = router;