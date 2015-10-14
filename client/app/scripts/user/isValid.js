/**
 * Calls $setValidity on the input field with true or false based on a bool variable given as the directive's value.
 */
angular.module('meanformApp').directive('isValid', ['$parse', function ($parse) {
  "use strict";

  var directive = {
    restrict: 'A',
    require: ['ngModel'],
    link: link
  };

  return directive;

  function link(scope, elem, attrs, ctrl) {
    var isValid = scope.$eval(attrs.isValid);
    var modelController = ctrl[0];

    attrs.$observe('isValid', function()
    {
      isValid = scope.$eval(attrs.isValid);
      modelController.$setValidity('byModel', isValid);
    });
  }
}]);
