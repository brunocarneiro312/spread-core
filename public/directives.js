(function() {
    'use strict';

    angular.module('panel.module')
        .directive('panelBody', PanelBody);

    function PanelBody() {
        return {
            restrict: 'E',
            templateUrl: './views/panel-body.html',
            controller: 'PanelController',
            scope: {
                test: '='
            },
            transclude: true
        }
    }
})();
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
(function() {
    'use strict';

    angular.module('panel.module')
        .directive('panelHeader', PanelHeader);

    function PanelHeader() {
        return {
            restrict: 'E',
            templateUrl: './views/panel-header.html',
            scope: {

            },
            transclude: true
        }
    }
})();
(function() {
    'use strict';

    angular.module('panel.module')
        .directive('panel', Panel);

    function Panel() {
        return {
            restrict: 'E',
            templateUrl: './views/panel.html',
            scope: {

            },
            transclude: true
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