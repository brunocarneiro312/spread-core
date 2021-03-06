/**
 * OverlayController
 *
 * @author bruno.carneiro@spread.com.br
 */
(function() {

    'use strict';

    angular.module('sprd.overlay.module')
        .controller('SprdOverlayController', SprdOverlayController);

    function SprdOverlayController($scope,
                               OverlayService) {

        $scope.applyOverlay  = applyOverlay;
        $scope.removeOverlay = removeOverlay;
        $scope.toggleOverlay = toggleOverlay;

        $scope.isOverlay = undefined;

        /** init */
        function init()
        {
            console.log("OverlayController");
        }
        init();

        /** applyOverlay */
        function applyOverlay()
        {
            $scope.isOverlay = OverlayService.applyOverlay();
        }

        /** removeOverlay */
        function removeOverlay()
        {
            $scope.isOverlay = OverlayService.removeOverlay();
        }

        /** toggleOverlay */
        function toggleOverlay()
        {
            $scope.isOverlay = OverlayService.toggleOverlay();
        }
    }

})();