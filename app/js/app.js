'use strict';


// Declare app level module which depends on filters, and services
angular.module('sk8', ['sk8.filters', 'sk8.services', 'sk8.directives', 'sk8.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/updates.html', controller: 'updatesController'});
    $routeProvider.when('/map', {templateUrl: 'partials/map.html', controller: 'mapController'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
