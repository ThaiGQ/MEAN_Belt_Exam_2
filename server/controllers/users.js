// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// March 02, 2017
// Track: MEAN
// MEAN Belt Exam: D - Doctor Appointment

console.log("Server/Controllers/users.js");

var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    login: function(req, res){
        console.log("*********************************************************");
        console.log(req.body.name);
        var name = req.body.name;
        User.findOne({name: name}, function(err, user) {
            console.log(user);
            console.log("************************************************************");
            if (!user) {
                var newUser = new User({
                    name: name,
                });
                console.log(newUser);
                newUser.save(function(err, user) {
                    console.log("Server/Controllers/users.js - create:", user);
                    console.log('New User added to database!');
                    console.log(user);
                    res.json({user:user});
                })
            }
            else if (err) {
                console.log('Unable to add new User!' + err);
                res.json({err:err})
            }
            else {
                console.log("Successfully logged in!");
                res.json({user:user});
            }
        })
    },
}
