/// <reference path="../../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../../app/scripts/controllers/isomorphic/user.ts" />

var module: any;

'use strict';

describe('Controller: IsomorphicUserCtrl', () => {

  // load the controller's module
  beforeEach(module('meanformApp'));

  var IsomorphicUserCtrl: meanformApp.IsomorphicUserCtrl,
    scope: meanformApp.IIsomorphicUserScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
    scope = <any>$rootScope.$new();
    IsomorphicUserCtrl = $controller('IsomorphicUserCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
