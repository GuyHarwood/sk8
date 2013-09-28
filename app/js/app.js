'use strict';


// Declare app level module which depends on filters, and services
angular.module('sk8', ['sk8.filters', 'sk8.services', 'sk8.directives', 'sk8.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider
	    .when('/', {
        templateUrl: 'partials/updates.html', 
        controller: 'updatesController'})
	    .when('/map', {
        templateUrl: 'partials/map.html', 
        controller: 'mapController'})
      .when('/create', {
        templateUrl: 'partials/create.html', 
        controller : 'createParkController'})
	    .otherwise({redirectTo: '/'});
  }])
  .factory('locationHelper', function(){
  	var location = function(){
        return {
          lat : 52.39494,
          lng : -1.2944
        }
  	};

  	return {
  		current : location
  	};
  });
