/// <reference path="../app.ts" />
'use strict';
var meanformApp;
(function (meanformApp) {
    var UserCtrl = (function () {
        // @ngInject
        function UserCtrl($scope, $resource, $http) {
            this.$scope = $scope;
            this.$resource = $resource;
            this.$http = $http;
            this.occupation = undefined;
            this.occupations = ['Programmer', 'Developer', 'Engineer', 'Coder', 'Ninja', 'Tester',
                'Business Analyst', 'CEO', 'CTO', 'Other'];
        }
        UserCtrl.prototype.submit = function (form) {
            this.$http.post('http://localhost:3000/user', form);
        };
        // TODO not here
        // TODO case insensitive
        UserCtrl.prototype.validateOccupation = function (value, values) {
            var isValid = (values.indexOf(value) >= 0);
            return isValid;
        };
        UserCtrl.prototype.isOver18 = function (birthday) {
            return moment().subtract(18, "years") > moment(birthday);
        };
        return UserCtrl;
    })();
    meanformApp.UserCtrl = UserCtrl;
})(meanformApp || (meanformApp = {}));
angular.module('meanformApp')
    .controller('UserCtrl', meanformApp.UserCtrl);
//# sourceMappingURL=user.js.map