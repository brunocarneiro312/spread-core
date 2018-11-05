(function() {
    'use strict';

    angular.module('sprd.panel.module')
        .directive('sprdPanelFooter', sprdPanelFooter);

    function sprdPanelFooter() {
        return {
            restrict: 'E',
            templateUrl: './views/panel-footer.html',
            scope: {

            },
            transclude: true
        }
    }
})();