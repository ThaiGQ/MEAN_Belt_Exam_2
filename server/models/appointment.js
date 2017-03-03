// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// March 02, 2017
// Track: MEAN
// MEAN Belt Exam: D - Doctor Appointment

console.log("Server/Models/appointment.js");

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AppointmentSchema = new Schema({
    _user: {type: Schema.Types.ObjectId, ref: "User"},
    date: {
        type: Date,
        min: [Date.now, "You can not make an appointment in the past!"],
        required: [true, "Date cannot be empty!"],
    },
    time: {
        type: Number,
        min: [8, "Our offices open at 8 am. Please choose another time for your appointment."],
        max: [17, "Our offices close at 5 pm. Please choose another time for your appointment."],
        required: [true, "Please choose a valid time for your appointment."],
    },
    symptom: {
        type: String,
        minlength: [10, "Description of symptom(s) must contain at least 10 characters!"],
        required: [true, "If you don't have any symptoms, why are you coming to the doctor's office?!"],
    }
}, {timestamps: true});

var Appointment = mongoose.model('Appointment', AppointmentSchema);
