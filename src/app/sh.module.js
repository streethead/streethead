(function () {
    'use strict';

    angular.module('sh', [
        /* Vendor's modules */
        'ui.router',
        'satellizer',

        /* App's modules */
        'sh.components',
        'sh.access',
    ]);
})();
/* PS: SH stands for StreetHead :D */