(function () {
    'use strict';

    angular.module('sh')
        .config(setupRoutes);

    function setupRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: "app/home/home.html"
            });

        $locationProvider.html5Mode(true);
    }
})();