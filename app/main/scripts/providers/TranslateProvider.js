(function() {
    'use strict';

    angular.module('main').config(TranslateProvider);

    function TranslateProvider($translateProvider) {
        console.log("Configuring translateProvider");
//        $translateProvider.translations('en', {
//            "profile": {
//                "HEADLINE" : 'Hello there, This is my awesome app!', "INTRO_TEXT" : 'And it has i18n support!'
//            }
//        }).translations('de', {
//            "profile": {
//                "HEADLINE" : 'Hey, das ist meine großartige App!', "INTRO_TEXT" : 'Und sie untersützt mehrere Sprachen!'
//            }
//        });
        $translateProvider.useStaticFilesLoader({
            prefix : '/l10n/',
            suffix : '.json'
        });
        $translateProvider.preferredLanguage('en_US');
//        $translateProvider.useLocalStorage(); // Note [RS]: Comment this out and run the app once if you need to switch preferred language.  Weird.
    }
})();
