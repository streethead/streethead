(function () {
    'use strict';

    angular.module('sh.access')
        .config(setupModals);

    function setupModals(ModalProvider) {
        ModalProvider
            .register({
                modal: 'join',
                templateUrl: 'app/access/join/join-modal.html'
            })
            .register({
                modal: 'connect',
                templateUrl: 'app/access/connect/connect-modal.html'
            })
            .register({
                modal: 'reset',
                templateUrl: 'app/access/reset/reset-modal.html'
            });
    }
})();