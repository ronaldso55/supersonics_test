describe('ProfileController test', function () {

    var scope, controller, rootScope;
    beforeEach(angular.mock.module('main'));
    beforeEach(angular.mock.inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        rootScope = $rootScope.$new();
//        http = $http;
//        httpBackend = $httpBackend;
//        factoryPsy = PsyServices;
//        localStorage = localStorageService;
//        scope.pushPreloadedView = function() {};
//        rootScope.publishLocalyticsChannel = function() {};
        controller = $controller('ProfileController', {
            $scope: scope,
            $rootScope: rootScope
        });
    }));

    describe('ProfileController tests', function() {
        it('Should have controller', function () {
            expect(controller).not.toBeUndefined();
        });
//        it('Should have updateAccount function', function () {
//            expect(scope.updateAccount).not.toBeUndefined();
//            expect(scope.updateAccount).toEqual(jasmine.any(Function));
//        });
//        it('Should have profileNavigatorBar function', function () {
//            expect(scope.profileNavigatorBar).not.toBeUndefined();
//            expect(scope.profileNavigatorBar).toEqual(jasmine.any(Function));
//        });
//        it('Should have updateDocument function', function () {
//            expect(scope.updateDocument).not.toBeUndefined();
//            expect(scope.updateDocument).toEqual(jasmine.any(Function));
//        });
//        it('Should initialize profileNavigatorBar', function() {
//            scope.profileNavigatorBar();
//            expect(rootScope.showNavigation).toEqual(true)
//            expect(rootScope.selectedTab).toEqual(3)
//        });
//        it('Should call updateAccount', function() {
//            spyOn(scope, 'updateDocument');
//            spyOn(scope, 'pushPreloadedView');
//            scope.updateAccount();
//            expect(scope.updateDocument).toHaveBeenCalled();
//            expect(scope.pushPreloadedView).toHaveBeenCalled()
//        });
//        it('Should load update documents on vault ', function() {
//            spyOn(factoryPsy, 'updateUserDocuments');
//            scope.userInputs = {
//                "milestone-1" : {"selected":"false"},
//                "safety-behaviour-1" : {"selected":"false", "count":0},
//                "avoided-behaviour-1" : {"selected":"false", "count":0}
//            };
//            scope.uploadUserDocument = true;
//            localStorage.set('userVault', {'id': "vault1"});
//            scope.userInputDocumentId = 1;
//            scope.updateDocument();
//            expect(factoryPsy.updateUserDocuments).toHaveBeenCalled();
//        });
    });
});
