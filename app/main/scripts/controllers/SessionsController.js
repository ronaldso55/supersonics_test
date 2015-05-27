(function() {
    'use strict';

    angular.module('main').controller('SessionsController', SessionsController);

    SessionsController.$inject = ['supersonic'];

    function SessionsController(supersonic) {
        var vm = this;
        vm.navbarTitle = "Sessions";
    }
})();
