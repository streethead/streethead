(function () {
    'use strict';

    angular.module('sh')
        .directive('shModalsContainer', shModalsContainer);

    function shModalsContainer($rootScope) {
        return {
            link: link,
            templateUrl: 'app/components/modal/modals-container.html',
            scope: {},
            controller: controller,
            bindToController: true,
            controllerAs: 'vm'
        };

        function controller() {
            this.setModalInfo = setModalInfo;

            function setModalInfo(modalInfo) {
                this.modal.title = modalInfo.title;
            };
        }

        function link(scope, elm, attrs, vm) {
            vm.states = {
                eventsAttached: false,
                loaded: false
            };

            vm.modal = {
                title: undefined,
                isOpen: false,
                templateUrl: undefined
            };

            vm.close = close;
            vm.loading = LoadingExternalTemplate;

            $rootScope.$on('modal.open', function(event, modal) { open(modal); });
            $rootScope.$on('modal.close', function(event, modal) { close(modal); });

            function open(modal) {
                vm.modal.templateUrl = modal.templateUrl;
                vm.modal.isOpen = true;
                togglePageScroll(true);
                /* When successive modals are opened */
                if(!vm.states.eventsAttached) {
                    attachCloseEvents();
                    vm.states.eventsAttached = true;
                }
            }

            function close(modal) {
                if(vm.modal.isOpen) {
                    vm.modal.templateUrl = undefined;
                    vm.modal.isOpen = false;
                    togglePageScroll(false);
                    detachCloseEvents();
                    vm.states.eventsAttached = false;
                }
            }

            function LoadingExternalTemplate() { vm.states.loaded = true; }

            function attachCloseEvents() {
                elm.on('click', clickAwayCallback);
                angular.element(document).on('keyup', escKeyCallback);
            }

            function detachCloseEvents() {
                elm.parent().off('click', clickAwayCallback);
                angular.element(document).off('keyup', escKeyCallback);
            }

            function clickAwayCallback(event) {
                /* @todo search for a better wat to prevent event propagation */
                if(_.contains(event.target.classList, 'overlay')) {
                    scope.$apply(function(){ vm.close(); });
                }
            }

            function escKeyCallback(event) {
                if(event.which == 27) {
                    scope.$apply(function(){ vm.close(); });
                }
            }

            function togglePageScroll(state) {
                angular.element(document.body).toggleClass('modal-is-open', state);
            }
        }
    }
})();