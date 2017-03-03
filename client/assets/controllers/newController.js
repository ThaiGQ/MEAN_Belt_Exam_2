// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// March 02, 2017
// Track: MEAN
// MEAN Belt Exam: D - Doctor Appointment

app.controller('newController', ['$scope', "$cookies", '$location', '$routeParams', "userFactory", 'appointmentFactory', function($scope, $cookies, $location, $routeParams, userFactory, appointmentFactory) {

    console.log("HEYOOOO", $cookies.get("session"))

    if (!$cookies.get("session")) {
        $location.url("/dashboard")
    }
    else {
        $scope.currentUser = $cookies.get("user");
    }

    var userID = $cookies.get("session");
    $scope.newAppointment = {};

    $scope.create_appointment = function() {
        console.log("appointmentController create_appointment:", $scope.newAppointment);
        console.log(userID);
        $scope.newAppointment._user = userID;
        appointmentFactory.create_appointment($scope.newAppointment, function (data) {
            console.log("newController create_appointment:", data.err);
            if (data.err) {
                $scope.errors = data.err.errors;
                console.log("newController errors:", $scope.errors);
                $location.url("/new")
            }
            else {
                console.log("newController - success:", data);
                $scope.newAppointment = {};
                $location.url("/dashboard")
            }
        })
    }

    // $scope.delete = function (poll_id) {
    //     console.log(poll_id);
    //     pollFactory.delete (poll_id)
    //     $scope.all_polls();
    // }

}]);
