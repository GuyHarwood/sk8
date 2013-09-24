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
  				updateType : 'additions',
          canonical : 'new-skatepark'
  			},
  			{
  				name : 'Updated Skatepark',
  				updateType : 'recent',
          canonical : 'updated-skatepark'
  			},
  			{
  				name : 'Close Skatepark',
  				updateType : 'nearby',
          canonical : 'close-skatepark'
  			},
  			{
  				name : 'Another new skatepark',
  				updateType : 'additions',
          canonical : 'another-new-skatepark'
  			}
  		];
  })
  .controller('mapController', function() {

  });