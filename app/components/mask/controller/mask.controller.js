(function() {
    'use strict';

    angular.module('sprd.mask.module')
        .controller('SprdMaskController', SprdMaskController);

    function SprdMaskController($scope,
                                SprdMaskService) {

        function init() {
            console.log('SprdMaskController');
        }
        init();

    }
})();