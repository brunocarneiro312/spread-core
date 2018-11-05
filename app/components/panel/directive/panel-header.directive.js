(function() {
    'use strict';

    angular.module('sprd.panel.module')
        .directive('sprdPanelHeader', sprdPanelHeader);

    function sprdPanelHeader() {
        return {
            restrict: 'E',
            templateUrl: './views/panel-header.html',
            scope: {

            },
            transclude: true
        }
    }
})();