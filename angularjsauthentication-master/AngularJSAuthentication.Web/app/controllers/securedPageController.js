'use strict';
app.controller('securedPageController', ['$scope', 'securedPageService', function ($scope, securedPageService) {

    securedPageService.testAuthentication().then(function (results) {

    }, function (error) {
    });

}]);