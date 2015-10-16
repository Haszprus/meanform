/// <reference path="../app.ts" />

'use strict';

module meanformApp {
  export interface IUserScope extends ng.IScope {
  }

  export class UserCtrl {
    occupation: String;
    occupations: String[];

    // @ngInject
    constructor (private $scope: IUserScope) {
      this.occupation = undefined;
      this.occupations = ['Programmer', 'Developer', 'Engineer', 'Coder', 'Ninja', 'Tester',
        'Business Analyst', 'CEO', 'CTO', 'Other'];
    }

    // TODO not here
    // TODO case insensitive
    validateTypeahead(value: String, values: String[]): boolean {
      var isValid = (values.indexOf(value) >= 0);
      return isValid;
    }
  }
}

angular.module('meanformApp')
  .controller('UserCtrl', meanformApp.UserCtrl);
