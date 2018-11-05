(function() {
    'use strict';

    angular.module('sprd.mask.module')
        .directive('sprdMask', sprdMask);

    function sprdMask() {
        return {
            require: "ngModel",
            link: function(scope, element, attr, ctrl) {
                element.bind('keyup', function() {
                    ctrl.$setViewValue(_formatDate(ctrl.$viewValue, attr.sprdDateFmt));
                    ctrl.$render();
                });
            }
        }

        /**
         * Formata uma data
         * @param date: input da data
         * @param fmt: formato da data
         * @private
         */
        function _formatDate(date, fmt) {

            date = date.replace(/[^0-9]+/g, "");
            fmt  = fmt || 'dd/mm/yyyy';

            if (fmt.toLowerCase() === 'dd/mm/yyyy') {
                return _formatDateDDMMYYYYBar(date);
            }

            if (fmt.toLowerCase() === 'dd-mm-yyyy') {
                return _formatDateDDMMYYYYDash(date);
            }

        }

        /**
         * Formata data no formato dd/mm/yyyy
         * @param date
         * @return {*}
         * @private
         */
        function _formatDateDDMMYYYYBar(date) {
            if (date.length > 2) {
                date = date.substring(0, 2) + "/" + date.substring(2);
            }
            if (date.length > 5) {
                date = date.substring(0, 5) + "/" + date.substring(5, 9);
            }
            return date;
        }

        /**
         * Formata data no formato dd-mm-yyyy
         * @param date
         * @return {*}
         * @private
         */
        function _formatDateDDMMYYYYDash(date) {

            if (date.length > 2) {
                date = date.substring(0, 2) + "-" + date.substring(2);
            }
            if (date.length > 5) {
                date = date.substring(0, 5) + "-" + date.substring(5, 9);
            }
            return date;
        }
    }
})();
(function() {

    'use strict';

    angular.module('sprd.overlay.module')
        .directive('sprdOverlay', sprdOverlay);

    function sprdOverlay()
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

(function() {
    'use strict';

    angular.module('sprd.panel.module')
        .directive('sprdPanelBody', sprdPanelBody);

    function sprdPanelBody() {
        return {
            restrict: 'E',
            templateUrl: './views/panel-body.html',
            controller: 'SprdPanelController',
            transclude: true,
            scope: {
                test: '='
            },
        }
    }
})();
(function() {
    'use strict';

    angular.module('sprd.panel.module')
        .directive('sprdPanelFooter', sprdPanelFooter);

    function sprdPanelFooter() {
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

    angular.module('sprd.panel.module')
        .directive('sprdPanelHeader', sprdPanelHeader);

    function sprdPanelHeader() {
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

    angular.module('sprd.panel.module')
        .directive('sprdPanel', sprdPanel);

    function sprdPanel() {
        return {
            restrict: 'E',
            templateUrl: './views/panel.html',
            scope: {

            },
            transclude: true
        }
    }
})();