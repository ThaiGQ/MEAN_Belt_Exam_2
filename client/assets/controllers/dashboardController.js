// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// March 02, 2017
// Track: MEAN
// MEAN Belt Exam: D - Doctor Appointment

app.controller('dashboardController', ['$scope', "$cookies", '$location', '$routeParams', "userFactory", 'appointmentFactory', function($scope, $cookies, $location, $routeParams, userFactory, appointmentFactory) {

    console.log("HEYOOOO", $cookies.get("session"))

    $scope.login = function () {
        var name = prompt("Stop! Who would cross the Bridge of Death must answer me these questions three, 'ere the other side he see.")
        $scope.user = {
            name: name
        }
        // console.log("login prompt", $scope.user);
        userFactory.login($scope.user, function (data) {
            // console.log("loginController - login: user", $scope.user);
            // console.log("loginController - login: data", data);
            if (data.err) {
            }
            else {
                // console.log("loginController - success:", data.user.name);
                $cookies.put('session', data.user._id);
                $cookies.put("user", data.user.name);
                $scope.currentUser = $cookies.get("user");
                $location.url("/dashboard")
            }
        })
        // console.log("login function");
    }

    if (!$cookies.get("session")) {
        $location.url("/dashboard");
        $scope.login();
    }
    else {
        $scope.userID = $cookies.get("session");
        $scope.currentUser = $cookies.get("user");
        $scope.today = new Date();
    }

    // $scope.create_topic = function() {
    //     // console.log("dashboardController create_message:", $scope.newMessage);
    //     $scope.newTopic._user = $scope.userID;
    //     topicFactory.create_topic($scope.newTopic, function (topic) {
    //         // console.log("dashboardController create_message:", message);
    //         $scope.newTopic = {};
    //         $scope.all_topics();
    //     })
    // }

    $scope.all_appointments = function() {
        // console.log("dashboardController all_appointments before:");
        appointmentFactory.all_appointments(function (appointments) {
            // console.log("dashboardController all_topics:", appointments);
            $scope.appointments = appointments;
        })
    }

    $scope.delete = function (appointmentID) {
        console.log("dashboardController.delete", appointmentID);
        appointmentFactory.delete (appointmentID)
        $scope.all_appointments();
    }

    $scope.logout = function () {
        $cookies.remove("session");
        $cookies.remove("user");
        $location.url("/dashboard");
    }
    /* on load time */
    $scope.all_appointments();

}]);
