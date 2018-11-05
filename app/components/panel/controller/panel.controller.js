(function() {
    'use strict';

    angular.module('sprd.panel.module')
        .controller('SprdPanelController', SprdPanelController);

    function SprdPanelController($scope,
                                 SprdPanelService) {

        $scope.test = undefined;

        function init() {
            console.log('PanelController');
        }
        init();
    }
})();