/// <reference path="../../app.ts" />

'use strict';

module meanformApp {
  export interface IIsomorphicUserScope extends ng.IScope {
  }

  export class IsomorphicUserCtrl {
    occupation: String;
    occupations: String[];

    // @ngInject
    constructor (private $scope: IIsomorphicUserScope) {
      this.occupation = undefined;
      this.occupations = ['Programmer', 'Developer', 'Engineer', 'Coder', 'Ninja', 'Tester',
        'Business Analyst', 'CEO', 'CTO', 'Other'];
    }

    // TODO not here
    // TODO case insensitive
    validateOccupation(value: String, values: String[]): boolean {
      var isValid = (values.indexOf(value) >= 0);
      return isValid;
    }

    isOver18(birthday) {
      return moment().subtract("years", 18) > moment(birthday);
    }
  }
}

angular.module('meanformApp')
  .controller('IsomorphicUserCtrl', meanformApp.IsomorphicUserCtrl);
