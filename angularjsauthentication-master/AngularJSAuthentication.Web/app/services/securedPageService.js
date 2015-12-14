'use strict';
app.factory('securedPageService', ['$http', 'ngAuthSettings', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiResourceServiceBaseUri;

    var securedPageService = {};

    var _testAuthentication = function () {

        return $http.get(serviceBase + 'api/protected/').then(function (results) {
            return results;
        });
    };

    securedPageService.testAuthentication = _testAuthentication;

    return securedPageService;

}]);