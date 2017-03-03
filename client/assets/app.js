// Ekapob Ukritnukun
// ThaiGQ@gmail.com
// March 02, 2017
// Track: MEAN
// MEAN Belt Exam: D - Doctor Appointment

var app = angular.module('app', ['ngRoute', 'ngCookies']);
/* configuration for angular route */
app.config(function($routeProvider) {
    $routeProvider
    .when('/dashboard', {
        templateUrl: '/partials/dashboard.html',
        controller: 'dashboardController'
    })
    .when('/new', {
        templateUrl: '/partials/new.html',
        controller: 'newController'
    })
    .otherwise({
        redirectTo: '/dashboard'
    });
});
