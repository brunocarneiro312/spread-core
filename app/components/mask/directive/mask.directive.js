(function() {
    'use strict';

    angular.module('sprd.mask.module')
        .directive('sprdMask', sprdMask);

    function sprdMask() {
        return {
            require: "ngModel",
            link: function(scope, element, attr, ctrl) {
                element.bind('keyup', function() {
                    ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
                    ctrl.$render();
                });
            }
        }

        /**
         * Formata uma data no formato dd/mm/yyyy
         * @param date
         * @private
         */
        function _formatDate(date) {
            date = date.replace(/[^0-9]+/g, "");

            if (date.length > 2) {
                date = date.substring(0, 2) + "/" + date.substring(2);
            }
            if (date.length > 5) {
                date = date.substring(0, 5) + "/" + date.substring(5, 9);
            }
            return date;
        }
    }
})();