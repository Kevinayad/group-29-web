var express = require('express');
const { module } = require('mongoose');
var router = express.Router();

router.post('/api/users', function (req, res, next)  {
    // Create new users
    var user =  {
        "userID": 2,
        "name": "Admin",
        "gender": "Female",
        "goals": "Insert goals"
    }
    
    //Send it the response back to the client
    res.status(201).json(user);
    });

    module.exports = router;