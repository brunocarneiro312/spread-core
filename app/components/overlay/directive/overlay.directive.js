(function() {

    'use strict';

    angular.module('sprd.overlay.module')
        .directive('sprdOverlay', sprdOverlay);

    function sprdOverlay()
    {
        return {
            restrict: 'E',
            templateUrl: './views/overlay.html',
            controller: 'OverlayController',
            transclude: true,
            scope: {
                test: "=",
                ignore: "="
            }
        };
    }

})();
