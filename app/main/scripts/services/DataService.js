(function() {
    'use strict';

    angular.module('main').service('DataService', DataService);

    DataService.$inject = ['$http', '$q'];

    function DataService(http, q) {
        console.log('Entering DataService');
        var urlTemplate = '../../jsondata/insert_data_name.json';

        var getData = function(name) {
            var fullUrl = urlTemplate.replace('insert_data_name', name);
            var deferred = q.defer();
            http.get(fullUrl)
                .success(function(data) {
                    deferred.resolve(data);
                }).error(function(msg, code) {
                    deferred.reject(msg);
                });
            return deferred.promise;
        };

        var getSessionData = function() {
            return this.getData('session');
        };

        var getBehaviorData = function(behaviourId) {
            return this.getData('behaviour');
        };

        var getAnxietyMeterData = function() {
            return this.getData('anxietymeter');
        };

        var getDocumentMapData = function() {
            return this.getData('documentIndexMap');
        };

        var getBreathingExerciseData = function() {
            return this.getData('breathingExercise');
        };

        var getOnBoardingData = function() {
            return this.getData('onboarding');
        };

        var getRegistrationData = function() {
            return this.getData('registration');
        };

        var getSessionListData = function() {
            return this.getData('sessions_list');
        };

        var getThoughtRecorderData = function() {
            return this.getData('thought_recorder');
        };
    }
})();
