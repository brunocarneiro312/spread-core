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