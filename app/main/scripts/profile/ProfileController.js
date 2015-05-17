(function() {
    'use strict';

    angular.module('main').controller('ProfileController', ProfileController);

    ProfileController.$inject = ['supersonic'];

    function ProfileController(supersonic) {
        var vm = this;
        vm.navbarTitle = "Profile";
        vm.h3content = "Profile H3 content";
    }
})();
