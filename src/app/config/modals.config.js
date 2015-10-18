(function () {
    'use strict';

    angular.module('sh')
        .config(setupModals);

    function setupModals(ModalProvider) {
        ModalProvider
            .register({
                modal: 'join',
                templateUrl: 'app/access/join-modal.html'
            })
            .register({
                modal: 'connect',
                templateUrl: 'app/access/connect-modal.html'
            });
    }
})();