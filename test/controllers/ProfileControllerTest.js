'use strict';

describe('ProfileController Tests', function () {
    var scope, controller, translate;

    beforeEach(module('main'), function($translateProvider) {
        $translateProvider.translation('en_US', {});
    });
    beforeEach(inject(function($controller, $rootScope, $translate) {
        scope = $rootScope.$new();
        controller = $controller('ProfileController', {$scope: scope});
        translate = $translate;
    }));

    it('Should have controller', function () {
        expect(controller).not.toBeUndefined();
    });
    it('should have navbarTitle defined', function() {
        translate('profile.TITLE').then(function(translation) {
            var title = translate.instant('profile.TITLE');
            expect(title).not.toBeUndefined();
            expect(title).toEqual('Profile');
        });
    });
});
