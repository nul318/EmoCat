(function() {
  'use strict';

  angular
    .module('profsystem')
    .config(routeConfig);

  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $stateProvider
      .state('profsystem', {
        views: {
            'header': { templateUrl: 'app/layout/header.html'},
            'sidebar': { templateUrl: 'app/layout/sidebar.html'},
            'content': { template: '<ui-view />'},
            'footer': {templateUrl: 'app/layout/footer.html'}
        }
  })
    .state('prof', {
        parent: 'profsystem',
        params: { user:"prof"}
    })
    .state('admin', {
        parent: 'profsystem',
        params: { user:"admin"}
    })
    .state('notice', {
        parent: 'profsystem',
        url:'/notice',
        templateUrl:'app/board/notice.html',
        controllerAs:'NoticeController',
        params: {title:"공지사항"}
    })
    .state('view', {
        parent: 'profsystem',
        url:'/view/:view_id',
        templateUrl:'app/board/notice_view.html',
        controllerAs:'ViewController',
        params: {title:"공지사항"}
    })
    .state('write', {
        parent: 'admin',
        url:'/write',
        templateUrl:'app/board/write.html',
        controllerAs:'BoardController',
        params: {title:"공지사항"}
    })
    .state('modify', {
        parent: 'admin',
        url:'/modify/:modify_id',
        templateUrl:'app/board/modify.html',
        controllerAs:'BoardController',
        params: {title:"공지사항"}
    })
    .state('fixed_classlist', {
          parent: 'prof',
          url: '/fixed_classlist',
          templateUrl:'app/fixedClassList/fixedClassList.html',
          controllerAs:'fixedClassListController',
          params: {title:"내 강의리스트(최종)"}
    })
    .state('approveList', {
          parent: 'admin',
          url: '/approveList',
          templateUrl:'app/approveList/approveList.html',
          controllerAs:'approveListController',
          params: {title:"최종 확정 내역"}
    })
    .state('timemodel_list', {
        parent: 'admin',
        url: '/timemodel_list',
        templateUrl:'app/timemodel/timemodelList.html',
        controllerAs:'timeModelController',
        params: {title:"수업 모형"}
    })
    .state('request_list', {
        parent: 'admin',
        url: '/request_list',
        templateUrl:'app/requestprof/request.html',
        controllerAs:'RequestController',
        params: {title:"신청 교수 리스트"}
    })
    .state('excel', {
        parent: 'admin',
        templateUrl: 'app/excel/excel.html'
    })
    .state('user_manage', {
        parent: 'excel',
        url: '/user_manage',
        templateUrl: 'app/excel/user_manage.html',
        params: {title:"사용자 관리"}
    })
    .state('add_user', {
        parent: 'admin',
        url: '/add_user',
        templateUrl: 'app/excel/add_user.html',
        params: {title:"사용자 추가"}
    })
    .state('subject_manage', {
        parent: 'excel',
        url: '/subject_manage',
        templateUrl: 'app/excel/subject_manage.html',
        params: {title:"과목 관리"}
    })
    .state('class_manage', {
        parent: 'admin',
        url: '/class_manage/:subject_id',
        templateUrl: 'app/excel/class_list.html',
        controllerAs: 'ClassManageController'
    })
    .state('class_request', {
        parent: 'admin',
        url: '/class_request/:class_id',
        templateUrl: 'app/excel/request_list.html',
        controllerAs: 'RequestListController'
    })
    .state('classreq', {
        parent: 'prof',
        url: '/classreq',
        params: {title: '강의 신청'},
        templateUrl: 'app/classreq/classreq.html',
        controllerAs: 'ClassReqController'
    })
    .state('reqClassList', {
        parent: 'prof',
        url: '/reqclasslist',
        params: {title: '신청한 강의리스트'},
        templateUrl: 'app/classreq/classreq.html'
        //controllerAs: 'ClassReqController'
    })
    .state('login', {
        url: '/login',
        views: {
             'content': { templateUrl: 'app/layout/login.html'},
             'footer': { templateUrl: 'app/layout/footer.html'}
        }
     })
    .state('system', {
      parent: 'admin',
      url: '/system',
      params: {title: '시스템'},
      templateUrl: 'app/system/system.html'
    });

$urlRouterProvider.otherwise('/login');

}

})();
