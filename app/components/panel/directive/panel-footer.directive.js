(function() {
    'use strict';

    angular.module('panel.module')
        .directive('panelFooter', PanelFooter);

    function PanelFooter() {
        return {
            restrict: 'E',
            templateUrl: './views/panel-footer.html',
            scope: {

            },
            transclude: true
        }
    }
})();