/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/user.ts" />

var module: any;

'use strict';

xdescribe('Controller: UserCtrl', () => {

  // load the controller's module
  beforeEach(module('meanformApp'));

  var UserCtrl: meanformApp.UserCtrl,
    scope: meanformApp.IUserScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
    scope = <any>$rootScope.$new();
    UserCtrl = $controller('UserCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
