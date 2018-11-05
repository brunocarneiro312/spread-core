(function() {
    'use strict';

    angular.module('panel.module')
        .directive('panelHeader', PanelHeader);

    function PanelHeader() {
        return {
            restrict: 'E',
            templateUrl: './views/panel-header.html',
            scope: {

            },
            transclude: true
        }
    }
})();