var express = require('express');
const { module } = require('mongoose');
var router = express.Router();

router.post('/api/users', function(req, res, next) {
    var user = {
            "userID": 2,
            "name": "Admin",
            "gender": "Female",
            "goals": "Insert goals"
             
             }
        res.status(201).json(user);
    });

    modules.export = router;
    // for exporting modules

