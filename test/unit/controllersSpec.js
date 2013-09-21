'use strict';

describe('Controller: updatesController', function () {

  beforeEach(module('sk8'));

  var updatesController,
    scope;

  beforeEach(inject(function ($controller) {
    scope = {};
    updatesController = $controller('updatesController', {
      $scope: scope
    });
  }));

  it('should attach a list of updateTypes to the scope', function () {
    expect(scope.updateTypes).toBeDefined();
  });

  it('should contain 3 update types', function(){
    expect(scope.updateTypes.length).toBe(3);
  });

  it('should attach a list of updates to the scope', function () {
    expect(scope.updates).toBeDefined();
  });

});
