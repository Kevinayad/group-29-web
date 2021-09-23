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
    })
})
module.exports = router;