(function() {
    'use strict';

    angular.module('main').factory('DataService', DataService);

    DataService.$inject = ['$http', '$q'];

    function DataService(http, q) {
        var getData = function(name) {
            var urlTemplate = '../../jsondata/insert_data_name.json';
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

        return {
            getSessionData : getSessionData,
            getBehaviorData : getBehaviorData,
            getAnxietyMeterData : getAnxietyMeterData,
            getDocumentMapData : getDocumentMapData,
            getBreathingExerciseData : getBreathingExerciseData,
            getOnBoardingData : getOnBoardingData,
            getRegistrationData : getRegistrationData,
            getSessionListData : getSessionListData,
            getThoughtRecorderData : getThoughtRecorderData
        };

        function getSessionData() {
            return getData('session');
        }

        function getBehaviorData(behaviourId) {
            return getData('behaviour');
        }

        function getAnxietyMeterData() {
            return getData('anxietymeter');
        }

        function getDocumentMapData() {
            return getData('documentIndexMap');
        }

        function getBreathingExerciseData() {
            return getData('breathingExercise');
        }

        function getOnBoardingData() {
            return getData('onboarding');
        }

        function getRegistrationData() {
            return getData('registration');
        }

        function getSessionListData() {
            return getData('sessions_list');
        }

        function getThoughtRecorderData() {
            return getData('thought_recorder');
        }
    }
})();
