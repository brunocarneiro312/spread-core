(function() {
    'use strict';

    angular.module('panel.module')
        .controller('PanelController', PanelController);

    function PanelController($scope,
                             PanelService) {

        $scope.test = undefined;

        function init() {
            console.log('PanelController');
        }
        init();
    }
})();