// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// March 02, 2017
// Track: MEAN
// MEAN Belt Exam: D - Doctor Appointment

console.log("Server/Models/user.js");

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name cannot be empty!"],
    },
}, {timestamps: true});

var User = mongoose.model('User', UserSchema);
