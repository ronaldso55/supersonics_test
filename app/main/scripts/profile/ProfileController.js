(function() {
    'use strict';

    angular.module('main').controller('ProfileController', ProfileController);

    ProfileController.$inject = ['supersonic', '$filter'];

    function ProfileController(supersonic, filter) {
        var vm = this,
            i18n = filter('translate');
        vm.navbarTitle = "Profile";
//        vm.h3content = "Profile H3 content";
        vm.h3content = i18n("HEADLINE");
    }
})();
