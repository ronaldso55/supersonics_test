(function() {
    'use strict';

    angular.module('main').service('ConfigService', ConfigService);

    ConfigService.$inject = ['$http'];

    function ConfigService(http) {
        console.log("Entering ConfigService");
        var getConfiguration: function() {
            var deferred = $q.defer();
            $http.get('../../config/config.json')
            .success(function(data) {
                deferred.resolve(data);
            }).error(function(msg, code) {
                deferred.reject(msg);
            });
            return deferred.promise;
        };
    }
})();
