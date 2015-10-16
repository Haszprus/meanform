/// <reference path="../../app.ts" />
/// <reference path="../../isomorph.ts" />
'use strict';
var meanformApp;
(function (meanformApp) {
    var IsomorphicUserCtrl = (function () {
        // @ngInject
        function IsomorphicUserCtrl($scope) {
            this.$scope = $scope;
            console.log("Isomorphic!");
            var its = new meanformApp.IsomorphicTs();
            this.occupation = undefined;
            this.occupations = ['Programmer', 'Developer', 'Engineer', 'Coder', 'Ninja', 'Tester',
                'Business Analyst', 'CEO', 'CTO', 'Other'];
        }
        // TODO not here
        // TODO case insensitive
        IsomorphicUserCtrl.prototype.validateOccupation = function (value, values) {
            var isValid = (values.indexOf(value) >= 0);
            return isValid;
        };
        IsomorphicUserCtrl.prototype.isOver18 = function (birthday) {
            return moment().subtract("years", 18) > moment(birthday);
        };
        return IsomorphicUserCtrl;
    })();
    meanformApp.IsomorphicUserCtrl = IsomorphicUserCtrl;
})(meanformApp || (meanformApp = {}));
angular.module('meanformApp')
    .controller('IsomorphicUserCtrl', meanformApp.IsomorphicUserCtrl);
//# sourceMappingURL=user.js.map