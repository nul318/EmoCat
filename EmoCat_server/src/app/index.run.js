(function() {
    'use strict';

    angular
        .module('emocat_web')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log) {

        $log.debug('runBlock end');
    }

})();
