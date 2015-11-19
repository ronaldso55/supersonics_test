(function() {
    'use strict';

    angular.module('main').controller('ToolsController', ToolsController);

    ToolsController.$inject = ['supersonic'];

    function ToolsController(supersonic) {
        var vm = this;
        vm.navbarTitle = 'Tools';
    }
})();
