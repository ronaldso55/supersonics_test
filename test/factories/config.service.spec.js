'use strict';

describe('factories: ConfigService', function () {
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

    beforeEach(inject(function($rootScope, $httpBackend, ConfigService) {
        scope = $rootScope.$new();
        httpBackend = $httpBackend;
        service = ConfigService;
    }));

    it('should define getConfiguration method', function() {
        expect(service.getConfiguration).toBeDefined();
        expect(service.getConfiguration).toEqual(jasmine.any(Function));
    });

    it('should return the configuration data', function() {
        httpBackend.whenGET('../../config/config.json').respond(
            {
                'accountId': '39a35b15-259e-47ca-b22a-3e74dc075504',
                'localyticsKey': '27d0a3b3944545922106b89-c55673ac-cc51-11e4-2ee7-004a77f8b47f'
            });

        service.getConfiguration().then(function(data) {
            expect(data.accountId).toBeDefined();
            expect(data.localyticsKey).toBeDefined();
            expect(data.accountId).toBe('39a35b15-259e-47ca-b22a-3e74dc075504');
        });

        httpBackend.flush();
    });

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });
});
