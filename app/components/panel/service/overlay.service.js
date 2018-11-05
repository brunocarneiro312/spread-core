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