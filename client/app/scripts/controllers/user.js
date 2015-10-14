/// <reference path="../app.ts" />
'use strict';
var meanformApp;
(function (meanformApp) {
    var UserCtrl = (function () {
        // @ngInject
        function UserCtrl($scope) {
            this.$scope = $scope;
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
            this.occupation = undefined;
            this.occupations = ['Programmer', 'Developer', 'Engineer', 'Coder', 'Ninja', 'Tester', 'Business Analyst', 'CEO', 'CTO', 'Other'];
        }
        return UserCtrl;
    })();
    meanformApp.UserCtrl = UserCtrl;
})(meanformApp || (meanformApp = {}));
angular.module('meanformApp')
    .controller('UserCtrl', meanformApp.UserCtrl);
//# sourceMappingURL=user.js.map