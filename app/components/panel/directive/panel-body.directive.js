(function() {
    'use strict';

    angular.module('sprd.panel.module')
        .directive('sprdPanelBody', sprdPanelBody);

    function sprdPanelBody() {
        return {
            restrict: 'E',
            templateUrl: './views/panel-body.html',
            controller: 'SprdPanelController',
            transclude: true,
            scope: {
                test: '='
            },
        }
    }
})();