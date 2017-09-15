(function() {
  'use strict';

  angular
    .module('emocat_web')
    .config(routeConfig);

  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $stateProvider
      .state('template', {
        views: {
            'header': { templateUrl: 'app/layout/header.html'},
            'sidebar': { templateUrl: 'app/layout/sidebar.html'},
            'content': { template: '<ui-view />'},
            'footer': {templateUrl: 'app/layout/footer.html'}
        }
      });

  $urlRouterProvider.otherwise('/');

}

})();
