(function() {
    'use strict';

    angular.module('sprd.panel.module')
        .directive('sprdPanel', sprdPanel);

    function sprdPanel() {
        return {
            restrict: 'E',
            templateUrl: './views/panel.html',
            scope: {

            },
            transclude: true
        }
    }
})();