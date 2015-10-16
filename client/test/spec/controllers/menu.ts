/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/menu.ts" />

'use strict';

xdescribe('Controller: MenuCtrl', () => {

  // load the controller's module
  beforeEach(module('meanformApp'));

  var MenuCtrl: meanformApp.MenuCtrl,
    scope: meanformApp.IMenuScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
    scope = <any>$rootScope.$new();
    MenuCtrl = $controller('MenuCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
