var express = require('express');
const user = require('../models/user');
var router = express.Router();
var User = require('../models/user');
app.use('/api/users', usersController);
router.post('/api/users', function(req, res, next) {
    var user = new User(req.body);
             user.save(function(err, user) {
                if (err) {return next(err);}
        res.status(201).json(user);
    })
    });

    module.exports = router;
    app.get('/api/users', function(req, res) {res.json({"users":usersController});});
app.post('/api/users', function(req, res, next) {
    var user = { 
     "name": user.name,
     "gender": user.gender,
     "height": user.height,
     "weight": user.weight,
     "goals": user.goals
}
user.push(usersController);
user.json(usersController);
user.status(201).json(usersController);
});

