(function() {
    'use strict';

    angular.module('sprd.mask.module')
        .service('SprdMaskService', SprdMaskService);

    function SprdMaskService() {

        function init() {

        }
        init();

    }
})();
/**
 * OverlayService
 *
 * @author bruno.carneiro@spread.com.br
 */
(function() {

    'use strict';

    angular.module('sprd.overlay.module')
        .service('SprdOverlayService', SprdOverlayService);

    function SprdOverlayService()
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

    angular.module('sprd.panel.module')
        .service('SprdPanelService', SprdPanelService);

    function SprdPanelService() {

        function init() {
            console.log('SprdPanelService');
        }
        init();
    }

})();