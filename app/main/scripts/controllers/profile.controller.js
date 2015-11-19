(function() {
    'use strict';

    angular.module('main').controller('ProfileController', ProfileController);

    ProfileController.$inject = ['supersonic', '$translate'];

    function ProfileController(supersonic, translate) {
        var vm = this;
        translate('profile.TITLE').then(function(translation) {
            vm.navbarTitle = translate.instant('profile.TITLE');
        });
    }
})();
