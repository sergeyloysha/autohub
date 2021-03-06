/*
 * Autohub project v1.0
 * Copyright (C) 2015 Sergey Loysha <sergeyloysha@gmail.com>
 */

'use strict';

angular.module('ah', [
  'ngRoute',
  'ngResource',
  'ah.filters',
  'ah.services',
  'ah.directives',
  'ah.controllers'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'InitCtrl',
      templateUrl: 'assets/views/autohub.html'
    })
    .when('/404', {
      template: '<div>Not Found</div>'
    })
    .otherwise({
      redirectTo: '/404'
    })
}])

.constant('constants', {

})