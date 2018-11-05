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