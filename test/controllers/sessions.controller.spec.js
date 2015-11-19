'use strict';

describe('controller: SessionsController', function () {
    var scope, controller;

    beforeEach(module('main'));
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('SessionsController', {$scope: scope});
    }));

    it('should have controller', function () {
        expect(controller).not.toBeUndefined();
    });
});
