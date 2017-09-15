(function() {
    'use strict';

    angular
        .module('profsystem')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log) {

        $log.debug('runBlock end');
    }

})();
