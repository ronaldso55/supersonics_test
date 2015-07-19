'use strict';

describe('controller: ToolsController', function () {
    var scope, controller;

    beforeEach(module('main'));
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('ToolsController', {$scope: scope});
    }));

    it('should have controller', function () {
        expect(controller).not.toBeUndefined();
    });
});
