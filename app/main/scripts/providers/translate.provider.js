(function() {
    'use strict';

    angular.module('main').config(TranslateProvider);

    function TranslateProvider($translateProvider) {
        console.log('Configuring translateProvider');
        $translateProvider.useStaticFilesLoader({
            prefix : '/l10n/',
            suffix : '.json'
        });
        $translateProvider.preferredLanguage('en_US');
        // $translateProvider.useLocalStorage();
        // Note [RS]: Comment this out and run the app once if you need to switch preferred language.  Weird.
    }
})();
