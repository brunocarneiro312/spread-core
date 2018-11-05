(function() {

    'use strict';

    angular.module('overlay.module')
        .directive('overlay', Overlay);

    function Overlay()
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