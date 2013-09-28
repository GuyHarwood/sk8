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
  .controller('mapController', function($scope) {
       
    $scope.myMarkers = [];

    $scope.mapOptions = {
      center: new google.maps.LatLng(35.784, -78.670),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.addMarker = function ($event, $params) {
      $scope.myMarkers.push(new google.maps.Marker({
        map: $scope.myMap,
        position: $params[0].latLng
      }));
    };

    $scope.setZoomMessage = function (zoom) {
      $scope.zoomMessage = 'You just zoomed to ' + zoom + '!';
      console.log(zoom, 'zoomed');
    };

    $scope.openMarkerInfo = function (marker) {
      $scope.currentMarker = marker;
      $scope.currentMarkerLat = marker.getPosition().lat();
      $scope.currentMarkerLng = marker.getPosition().lng();
      $scope.myInfoWindow.open($scope.myMap, marker);
    };

    $scope.setMarkerPosition = function (marker, lat, lng) {
      marker.setPosition(new google.maps.LatLng(lat, lng));
  };

})
.controller('createParkController', function($scope, locationHelper){

    $scope.park = {
      name : 'enter name',
      description : locationHelper.town,
      lat : locationHelper.current.lat,
      lng : locationHelper.current.lng
    };

    $scope.createPark = function(formdata){
        //validate and POST
        console.log('validate submission');
        console.log('POST to server');
    };
});
    