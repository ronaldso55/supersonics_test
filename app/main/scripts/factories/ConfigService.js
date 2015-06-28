(function() {
    'use strict';

    angular.module('main').factory('ConfigService', ConfigService);

    ConfigService.$inject = ['$http', '$q'];

    function ConfigService(http, q) {
        return {
            getConfiguration: getConfiguration
        };

        function getConfiguration() {
            var deferred = q.defer();
            http.get('../../config/config.json')
            .success(function(data) {
                deferred.resolve(data);
            }).error(function(msg, code) {
                deferred.reject(msg);
            });
            return deferred.promise;
        }
    }
})();
