(function() {

    'use strict';

    angular.module('app.module', [
        'overlay.module',
        'panel.module'
    ])

})();
/**
 * Overlay Module
 *
 * @author bruno.carneiro
 */
(function() {

    'use strict';

    angular.module('overlay.module', [

    ]);

})();
(function() {
    'use strict';

    angular.module('panel.module', [

    ]);

})();
/**
 * OverlayController
 *
 * @author bruno.carneiro@spread.com.br
 */
(function() {

    'use strict';

    angular.module('overlay.module')
        .controller('OverlayController', OverlayController);

    function OverlayController($scope,
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
(function() {

    'use strict';

    angular.module('overlay.module')
        .directive('overlay', Overlay);

    function Overlay()
    {
        return {
            restrict: 'E',
            templateUrl: './views/overlay.html',
            controller: 'OverlayController',
            transclude: true,
            scope: {
                test: "=",
                ignore: "="
            }
        };
    }

})();
/**
 * OverlayService
 *
 * @author bruno.carneiro@spread.com.br
 */
(function() {

    'use strict';

    angular.module('overlay.module')
        .service('OverlayService', OverlayService);

    function OverlayService()
    {
        /** Variáveis */
        var isOverlay = undefined;

        /** Funções */
        this.applyOverlay  = applyOverlay;
        this.removeOverlay = removeOverlay;
        this.toggleOverlay = toggleOverlay;

        /**
         * init
         */
        function init()
        {

        }
        init();

        /**
         * Aplica overlay
         */
        function applyOverlay()
        {
            isOverlay = true;
            return this.isOverlay;
        }

        /**
         * Remove overlay
         */
        function removeOverlay()
        {
            isOverlay = false;
            return this.isOverlay;
        }

        /**
         * Alterna overlay
         */
        function toggleOverlay()
        {
            isOverlay = !this.isOverlay;
            return this.isOverlay;
        }
    }
})();
(function() {
    'use strict';

    angular.module('panel.module')
        .controller('PanelController', PanelController);

    function PanelController($scope,
                             PanelService) {

        function init() {
            console.log('PanelController');
        }
        init();
    }
})();
(function() {
    'use strict';

    angular.module('panel.module')
        .directive('panel', Panel);

    function Panel() {
        return {
            restrict: 'E',
            templateUrl: 'panel.directive',
            scope: {

            }
        }
    }
})();
(function() {
    'use strict';

    angular.module('panel.module')
        .service('PanelService', PanelService);

    function PanelService() {

        function init() {
            console.log('PanelService');
        }
        init();
    }

})();