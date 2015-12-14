
var app = angular.module('AngularAuthApp', ['ngRoute', 'LocalStorageModule']);

app.config(function ($routeProvider) {

    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "/app/views/home.html"
    });

    $routeProvider.when("/login", {
        controller: "loginController",
        templateUrl: "/app/views/login.html"
    });

    $routeProvider.when("/secured", {
        controller: "securedPageController",
        templateUrl: "/app/views/securedPage.html"
    });

    $routeProvider.otherwise({ redirectTo: "/login" });

});

var authorizationServiceBase = 'http://localhost:26264/';
var resourceServiceBase = 'http://localhost:47039/';

app.constant('ngAuthSettings', {
    apiAuthorizationServiceBaseUri: authorizationServiceBase,
    apiResourceServiceBaseUri: resourceServiceBase,
    clientId: 'ngAuthApp'
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
});

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);


