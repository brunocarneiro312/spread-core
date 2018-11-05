(function() {
    'use strict';

    angular.module('panel.module')
        .directive('panel', Panel);

    function Panel() {
        return {
            restrict: 'E',
            templateUrl: './views/panel.html',
            scope: {

            },
            transclude: true
        }
    }
})();