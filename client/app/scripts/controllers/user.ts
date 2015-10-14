/// <reference path="../app.ts" />

'use strict';

module meanformApp {
  export interface IUserScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class UserCtrl {
    occupation: String;
    occupations: String[];

    // @ngInject
    constructor (private $scope: IUserScope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];


      this.occupation = undefined;
      this.occupations = ['Programmer', 'Developer', 'Engineer', 'Coder', 'Ninja', 'Tester', 'Business Analyst', 'CEO', 'CTO', 'Other'];
    }
  }
}

angular.module('meanformApp')
  .controller('UserCtrl', meanformApp.UserCtrl);
