"use strict";

(function () {

    angular.module('accountApp').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/dashboard");

        $stateProvider.state("dashboard", {
            url: "/dashboard",
            templateUrl: "app/feature/dashboard/dashboard.html"
        }).state("account", {
                url: "/account",
                templateUrl: "app/feature/account/account.html"
        }).state("trainee", {
            url: "/trainee",
            templateUrl: "app/feature/trainees/trainee.html"
        }).state("traineeInfo", {
            url: "/trainee/info",
            templateUrl: "app/feature/traineeInfo/trainee-info.html"
        })
    });
}());