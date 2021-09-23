var express = require('express');
var router = express.Router();
var Reminder = require('../models/reminder');

router.post('/api/reminders',function(req,res,next){
    var reminder = new Reminder(req.body);
    reminder.save(function(err, reminder){
        if(err){
            return next(err);
        }
        res.status(201).json(reminder);
    });
});
router.get('/api/reminders',function(req,res,next){
    Reminder.find(function(err,reminders){
        if(err){
            return next(err);
        }
        res.json({"reminders":reminders})
    });
});
router.get('/api/reminders/:_id',function(req,res,next){
    id = req.params._id;
    Reminder.findById(id,function(err,reminders){
        if(err){
            return next(err);
        }
        res.json({"reminders":reminders})
    });
});
module.exports = router;