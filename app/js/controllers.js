'use strict';

/* Controllers */

angular.module('sk8.controllers', []).
  controller('updatesController', function($scope) {
  		$scope.updateTypes = [
  			'recent',
  			'nearby',
  			'additions'
  		];
  		$scope.updates = [
  			{
  				name : 'New Skatepark',
  				updateType : 'additions'
  			},
  			{
  				name : 'Updated Skatepark',
  				updateType : 'recent'
  			},
  			{
  				name : 'Close Skatepark',
  				updateType : 'nearby'
  			}
  		];
  })
  .controller('mapController', function() {

  });