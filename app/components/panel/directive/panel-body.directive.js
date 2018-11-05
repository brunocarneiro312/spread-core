(function() {
    'use strict';

    angular.module('panel.module')
        .directive('panelBody', PanelBody);

    function PanelBody() {
        return {
            restrict: 'E',
            templateUrl: './views/panel-body.html',
            controller: 'PanelController',
            scope: {
                test: '='
            },
            transclude: true
        }
    }
})();