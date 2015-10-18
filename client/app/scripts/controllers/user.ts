/// <reference path="../app.ts" />

'use strict';

module meanformApp {
  export interface IUserScope extends ng.IScope {
  }

  export class UserCtrl {
    occupation: String;
    occupations: String[];
    form: any;

    // @ngInject
    constructor (private $scope: IUserScope, private $resource: angular.resource.IResourceService, private $http: angular.IHttpService) {
      this.occupation = undefined;
      this.occupations = ['Programmer', 'Developer', 'Engineer', 'Coder', 'Ninja', 'Tester',
        'Business Analyst', 'CEO', 'CTO', 'Other'];
    }

    submit(form) {
      this.$http.post('http://localhost:3000/user', form);
    }

    // TODO not here
    // TODO case insensitive
    validateOccupation(value: String, values: String[]): boolean {
      var isValid = (values.indexOf(value) >= 0);
      return isValid;
    }

    isOver18(birthday) {
      return moment().subtract(18, "years") > moment(birthday);
    }
  }
}

angular.module('meanformApp')
  .controller('UserCtrl', meanformApp.UserCtrl);
