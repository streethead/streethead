(function () {

    'use strict';

    angular.module('sh')
        .provider('Modal', modalProvider);

    function modalProvider() {
        var modals = [];
        this.register = register;
        this.$get = modalFactory;

        function register(modal) {
            modals.push(modal);
            return this;
        }

        function modalFactory($rootScope) {
            return new Modal(modals, $rootScope);
        }
    }

    function Modal(modals, $rootScope) {
        this.open = open;
        this.close = close;
        this.registeredModals = registeredModals;

        /* Public API */
        function open(modalRef) {
            $rootScope.$emit('modal.open', getModal(modalRef));
        }

        function close(modalRef) {
            $rootScope.$emit('modal.close', getModal(modalRef));
        }

        function registeredModals() { return modals; }

        /* Private API */
        function getModal(modalRef) {
            var modal = _.find(modals, function(item){ return item.modal === modalRef; })
            if(_.isUndefined(modal)) { throw new ModalNotRegisteredException(modalRef); }
            return modal;
        }
    }

    function ModalNotRegisteredException(modalRef) {
        this.message = "The Modal [ " + modalRef + " ] is not registered!";
        this.name = "ModalNotRegisteredException";
    }
})();