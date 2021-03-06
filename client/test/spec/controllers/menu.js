/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/menu.ts" />
'use strict';
xdescribe('Controller: MenuCtrl', function () {
    // load the controller's module
    beforeEach(module('meanformApp'));
    var MenuCtrl, scope;
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MenuCtrl = $controller('MenuCtrl', {
            $scope: scope
        });
    }));
    it('should attach a list of awesomeThings to the scope', function () {
        //expect(scope.awesomeThings.length).toBe(3);
    });
});
//# sourceMappingURL=menu.js.map