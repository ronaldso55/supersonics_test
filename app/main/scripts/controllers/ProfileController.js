(function() {
    'use strict';

    angular.module('main').controller('ProfileController', ProfileController);

    ProfileController.$inject = ['supersonic', '$filter'];

    function ProfileController(supersonic, filter) {
        var vm = this,
            i18n = filter('translate');
        vm.navbarTitle = "Profile";
    }
})();
