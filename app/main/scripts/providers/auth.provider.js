(function() {
    'use strict';

    angular.module('main').config(AuthProvider).run(function(auth) {
        // This hooks al auth events to check everything as soon as the app starts
        auth.hookEvents();
    });

    function AuthProvider(authProvider) {
        console.log('Configuring AuthProvider');
        authProvider.init({
            domain : 'alohatest.auth0.com',
            clientID : '3Km947RdlTuOaYMrf26eu9DZJTYzmGVQ'
        });
    }
})();
