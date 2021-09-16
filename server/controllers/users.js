var express = require('express');
var router = express.Router();

router.post('/api/users', function(req, res, next) {
    var user = {
            "userID": 2,
            "name": "Admin",
            "gender": "Female",
            "goals": "Insert goal"
             
             }
        res.status(201).json(user);
    });

    module.exports = router;
    // for exporting modules
