// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// March 02, 2017
// Track: MEAN
// MEAN Belt Exam: D - Doctor Appointment

console.log("userFactory");
app.factory('appointmentFactory', ["$http", function($http) {
    var factory = {};

    factory.create_appointment = function(newAppointment, callback) {
        // console.log("appointmentFactory.create: before", newAppointment);
        $http.post("/createAppointment", newAppointment).then(function (data) {
            // console.log("appointmentFactory.create:", data.data);
            if (typeof(callback) === 'function') {
                callback(data.data);
            }
        })
    };

    factory.all_appointments = function(callback) {
        $http.get("/dashboard").then(function (data) {
            // console.log("appointmentFactory.all_appointments:", data.data.appointments);
            if (typeof(callback) === 'function') {
                callback(data.data.appointments);
            }
        })
    };

    // factory.create_message = function(topicID, newMessage, callback) {
    //     // console.log("messageFactory.create: before", newMessage);
    //     $http.post("/createMessage/" + topicID, newMessage).then(function (data) {
    //         // console.log("messageFactory.create:", data.data);
    //         if (typeof(callback) === 'function') {
    //             callback(data.data);
    //         }
    //     })
    // };

    // factory.all_messages = function(callback) {
    //     $http.get("/dashboard").then(function (data) {
    //         console.log("messageFactory.all_messages:", data.data.messages);
    //         if (typeof(callback) === 'function') {
    //             callback(data.data.messages);
    //         }
    //     })
    // };

    // factory.show_topic = function(topicID, callback) {
    //     console.log("topicFactory.show_topic before $http.get: ", topicID);
    //     $http.get("/topic/" + topicID).then(function (data) {
    //         console.log("topicFactory.show_topic - data.data.topic:", data.data.topic);
    //         if (typeof(callback) === 'function') {
    //             callback(data.data.topic);
    //         }
    //     })
    // };

    // factory.vote = function(messageID, vote, callback) {
    //     console.log("topicFactory.vote:", messageID, vote);
    //     $http.put("/vote/" + messageID, vote).then(function (data) {
    //         console.log("messageFactory.vote:", data);
    //         if (typeof(callback) === 'function') {
    //             callback(data.data);
    //         }
    //     })
    // }

    // factory.create_comment = function(messageID, newComment, callback) {
    //     // console.log("messageFactory.create_comment: before", newComment);
    //     $http.post("/createComment/" + messageID, newComment).then(function (data) {
    //         // console.log("messageFactory.create_comment:", data.data);
    //         if (typeof(callback) === 'function') {
    //             callback(data.data);
    //         }
    //     })
    // };

    factory.delete = function(appointmentID, callback) {
        console.log("appointmentFactory.delete:", appointmentID);
        $http.delete("/delete/" + appointmentID).then(function (data) {
            console.log("appointmentFactory.delete:", data);
            if (typeof(callback) === 'function') {
                callback(data.data);
            }
        })
    }

    return factory;
}]);
