(function () {
    'use strict';

    angular.module('sh.components')
        .directive('shModal', shModal);

    function shModal() {
        return {
            link: link,
            scope: {
                shTitle: '@'
            },
            require: '^shModalsContainer'
        };

        function link(scope, elm, attrs, modalsContainerCtrl) {
            modalsContainerCtrl.setModalInfo({
                title: scope.shTitle
            });
        }
    }

})();