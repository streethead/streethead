(function () {
    'use strict';

    angular.module('sh.access')
        .controller('ConnectController', ConnectController);

    function ConnectController($auth, Modal) {
        var vm = this;
        vm.isProcessing = false;
        vm.error;

        vm.login = function() {
            vm.isProcessing = true;
            vm.error = undefined;

            $auth.login({
                email: vm.email,
                password: vm.password
            })
            .then(
                function(response) {
                    Modal.close('connect');
                },
                function(response) {
                    switch(response.data.error) {
                        case 'invalid_credentials':
                            vm.error = "Your credentials are invalid!";
                            break;
                    }
                }
            )
            .finally(function() {
                vm.isProcessing = false;
            });
        }
    }
})();