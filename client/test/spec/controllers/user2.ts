/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/user2.ts" />

'use strict';

describe('Controller: User2Ctrl', () => {

  // load the controller's module
  beforeEach(module('meanformApp'));

  var User2Ctrl: meanformApp.User2Ctrl,
    scope: meanformApp.IUser2Scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
    scope = <any>$rootScope.$new();
    User2Ctrl = $controller('User2Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
