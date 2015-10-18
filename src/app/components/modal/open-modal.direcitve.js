(function () {
    'use strict';

    angular.module('sh')
        .directive('shOpenModal', shModal);

    function shModal(Modal) {
        return {
            link: link,
            restrict: 'A',
        };

        function link(scope, elm, attrs) {

            elm.on('click', showModal);

            function showModal(e) {
                scope.$apply(function() { Modal.open(attrs.shOpenModal); });
                e.preventDefault();
            }

        }
    }
})();