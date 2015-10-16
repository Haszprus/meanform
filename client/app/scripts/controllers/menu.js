/// <reference path="../app.ts" />
'use strict';
var meanformApp;
(function (meanformApp) {
    var MenuCtrl = (function () {
        // @ngInject
        function MenuCtrl($scope, $location) {
            this.$scope = $scope;
            this.$location = $location;
        }
        MenuCtrl.prototype.isActive = function (viewLocation) {
            return viewLocation === this.$location.path();
        };
        return MenuCtrl;
    })();
    meanformApp.MenuCtrl = MenuCtrl;
})(meanformApp || (meanformApp = {}));
angular.module('meanformApp')
    .controller('MenuCtrl', meanformApp.MenuCtrl);
//# sourceMappingURL=menu.js.map