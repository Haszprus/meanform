'use strict';

describe('Controller: UserCtrl', function () {

  // load the controller's module
  beforeEach(module('meanformApp'));

  var UserCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    UserCtrl = $controller('UserCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserCtrl.awesomeThings.length).toBe(3);
  });
});
