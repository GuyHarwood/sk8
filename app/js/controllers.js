'use strict';

/* Controllers */

angular.module('sk8.controllers', []).
  controller('updatesController', [function($scope) {
  		$scope.updateTypes = [
  			'recent',
  			'nearby',
  			'popular'
  		];
  		$scope.updates = [
  			{
  				name : 'New Skatepark',
  				updateType : 
  			}
  		];
  }])
  .controller('mapController', [function() {

  }]);