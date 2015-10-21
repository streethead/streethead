(function () {
    'use strict';

    angular.module('sh')
        .constant('API_URL', 'http://192.168.33.10/api')
        .config(appConfig);

    function appConfig($authProvider, API_URL) {
        /* Satellizer Configuration */
        $authProvider.loginUrl = API_URL + '/login';
    }
})();