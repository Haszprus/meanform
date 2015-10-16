/// <reference path="../../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../../app/scripts/controllers/isomorphic/user.ts" />
var module;
'use strict';
describe('Controller: IsomorphicUserCtrl', function () {
    // load the controller's module
    beforeEach(module('meanformApp'));
    var IsomorphicUserCtrl, scope;
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        IsomorphicUserCtrl = $controller('IsomorphicUserCtrl', {
            $scope: scope
        });
    }));
    it('should attach a list of awesomeThings to the scope', function () {
        //expect(scope.awesomeThings.length).toBe(3);
    });
});
//# sourceMappingURL=user.js.map