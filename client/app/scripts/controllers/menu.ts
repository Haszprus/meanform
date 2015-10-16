/// <reference path="../app.ts" />

'use strict';

module meanformApp {
  export interface IMenuScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class MenuCtrl {
    // @ngInject
    constructor(private $scope:IMenuScope, private $location) {

    }

    isActive(viewLocation) {
      return viewLocation === this.$location.path();
    }

  }
}

angular.module('meanformApp')
  .controller('MenuCtrl', meanformApp.MenuCtrl);
