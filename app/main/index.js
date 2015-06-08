(function() {
    'use strict';

    angular.module('main', [
    // Declare here all AngularJS dependencies that are shared by the main module.
    'ngCookies', // For I18N services local storage
    'ngSanitize', // For HTML sanitization for security purposes (safe tags only)
    'pascalprecht.translate', // For I18N
    'supersonic'// Require for Supersonic framework
]);
})();
