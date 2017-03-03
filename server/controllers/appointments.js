// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// March 02, 2017
// Track: MEAN
// MEAN Belt Exam: D - Doctor Appointment

console.log("Server/Controllers/polls.js");

var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment');
var User = mongoose.model("User")


module.exports = {

    all_appointments: function(req, res) {
        Appointment.find({}).populate("_user").exec(function(err, appointments) {
            // console.log("appointments.js all_appointments:", appointments);
            if (err) {
                // console.log("Danger! Danger! Imminent Warp Core breach detected!" + err);
            }
            res.json({appointments:appointments});
        })
    },

    create_appointment: function (req, res) {
        // console.log(req.body);
        User.findOne({_id: req.body._user}, function(err, user){
            // console.log("appointments.js create_appointment: user", user);
            var newAppointment = new Appointment({
                _user: user,
                date: req.body.date,
                time: req.body.time,
                symptom: req.body.symptom
            });

            Appointment.findOne({date: req.body.date, _user: req.body._user}, function (err, appointment) {
                if (appointment) {
                    console.log("found same day appointments", appointment);
                    var error = {
                        message: "You can only make one appointment per day."
                    }
                    res.json({error:error})
                }
                else {
                    Appointment.count({date: req.body.date}, function (err, appointments) {
                        console.log("*****************************************************");
                        console.log(appointments);
                        if (appointments < 3) {
                            newAppointment.save(function(err, appointment) {
                                if(err) {
                                    console.log('Unable to add new Appointment!' + err);
                                    res.json({err:err})
                                }
                                else {
                                    // console.log('New Appointment added to schedule!');
                                    // console.log(appointment);
                                    res.json({appointment:appointment});
                                }
                                console.log("Server/Controllers/appointments.js - create:", appointment);
                            })
                        }
                        else {
                            console.log("Too many appointments in one day!");
                            var error = {
                                message: "Only 3 appointments allowed in 1 day. Please choose another day for your appointment."
                            }
                            res.json({error:error})
                        }
                    })
                }
            })
        })
    },

    // show: function(req, res){
    //     console.log("polls.js show req.body:", req.params);
    //     Poll.findOne({_id: req.params.id}, function(err, poll) {
    //         console.log("polls.js show:", req.params.id);
    //         console.log("polls.js show:", poll);
    //         if (err) {
    //             console.log("Danger! Danger! Iminent Warp Core breach detected!");
    //             console.log("users.js show:", err)
    //         }
    //         res.json({poll:poll});
    //     })
    // },

    delete: function(req, res){
        Appointment.remove({_id: req.params.appointmentID}, function (err) {
            console.log("appointments.js delete:", req.params.appointmentID);
            if(err) {
                console.log('Unable to delete Appointment!' + err);
            }
            else {
                console.log('Appointment successfully deleted!');
            }
        })
    },
}
