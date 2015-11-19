'use strict';

describe('factories: DataService', function () {
    var scope, httpBackend, service;

    beforeEach(module('main', function($provide, $translateProvider) {
        $provide.factory('customLoader', function($q) {
            return function() {
                var deferred = $q.defer();
                deferred.resolve({});
                return deferred.promise;
            };
        });
        $translateProvider.useLoader('customLoader');
    }));

    beforeEach(inject(function($rootScope, $httpBackend, DataService) {
        scope = $rootScope.$new();
        httpBackend = $httpBackend;
        service = DataService;
    }));

    it('should define getSessionData method', function() {
        expect(service.getSessionData).toBeDefined();
        expect(service.getSessionData).toEqual(jasmine.any(Function));
    });

    it('should define getBehaviorData method', function() {
        expect(service.getBehaviorData).toBeDefined();
        expect(service.getBehaviorData).toEqual(jasmine.any(Function));
    });

    it('should define getAnxietyMeterData method', function() {
        expect(service.getAnxietyMeterData).toBeDefined();
        expect(service.getAnxietyMeterData).toEqual(jasmine.any(Function));
    });

    it('should define getDocumentMapData method', function() {
        expect(service.getDocumentMapData).toBeDefined();
        expect(service.getDocumentMapData).toEqual(jasmine.any(Function));
    });

    it('should define getBreathingExerciseData method', function() {
        expect(service.getBreathingExerciseData).toBeDefined();
        expect(service.getBreathingExerciseData).toEqual(jasmine.any(Function));
    });

    it('should define getOnBoardingData method', function() {
        expect(service.getOnBoardingData).toBeDefined();
        expect(service.getOnBoardingData).toEqual(jasmine.any(Function));
    });

    it('should define getRegistrationData method', function() {
        expect(service.getRegistrationData).toBeDefined();
        expect(service.getRegistrationData).toEqual(jasmine.any(Function));
    });

    it('should define getSessionListData method', function() {
        expect(service.getSessionListData).toBeDefined();
        expect(service.getSessionListData).toEqual(jasmine.any(Function));
    });

    it('should define getThoughtRecorderData method', function() {
        expect(service.getThoughtRecorderData).toBeDefined();
        expect(service.getThoughtRecorderData).toEqual(jasmine.any(Function));
    });

    it('should not have access to the private getData method', function() {
        expect(service.getData).toBeUndefined();
    });

    it('should return the registration data from registration.json', function() {
        httpBackend.whenGET('../../jsondata/registration.json').respond({
            'register': {
                'country': ['United States', 'India']
            },
            'aboutProgram': {}
        });
        service.getRegistrationData().then(function(data) {
            expect(data.register).toBeDefined();
            expect(data.aboutProgram).toBeDefined();
            expect(data.register.country[0]).toBe('United States');
            expect(data.register.country[1]).toBe('India');
        });
        httpBackend.flush();
    });

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });
});
