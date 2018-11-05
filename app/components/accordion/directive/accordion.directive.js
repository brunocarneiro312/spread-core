(function() {
    'use strict';

    angular.module('sprd.accordion.module')
        .directive('sprdAccordion', sprdAccordion);

    function sprdAccordion() {
        return {
            templateUrl: './view/accordion.html',
            restrict: 'E',
            transclude: true,
            scope: {

            }
        }
    }

})();