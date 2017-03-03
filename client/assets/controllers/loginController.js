// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// March 02, 2017
// Track: MEAN
// MEAN Belt Exam: D - Doctor Appointment

app.controller('dashboardController', ['$scope', "$cookies", '$location', '$routeParams', "userFactory", function($scope, $cookies, $location, $routeParams, userFactory) {

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

    $scope.logout = function () {
        $cookies.remove("session");
        $cookies.remove("user");
        $location.url("/dashboard");
    }
    /* on load time */
    $scope.all_appointments();

}]);
