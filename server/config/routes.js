// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// March 02, 2017
// Track: MEAN
// MEAN Belt Exam: D - Doctor Appointment

console.log('Server/Config/routes.js');

var users = require("../controllers/users.js");
var appointments = require("../controllers/appointments.js");

module.exports = function(app){
    app.post("/login", users.login);
    app.get("/dashboard", appointments.all_appointments);
    app.post("/createAppointment", appointments.create_appointment);
    app.delete("/delete/:appointmentID", appointments.delete);
    // app.get("/topic/:topicID", topics.show_topic);
    // app.post("/createMessage/:topicID", topics.create_message);
    // app.put("/vote/:messageID", topics.vote);
    // app.post("/createComment/:messageID", topics.create_comment);
}
