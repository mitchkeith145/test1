'use strict';

// Define the `phonecatApp` module
var phonecatApp = angular.module('phonecatApp', ["checklist-model", "ngMaterial"]);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('PhoneListController', function PhoneListController($scope, $mdDialog) {

  $scope.costFeatureTypes = ["Premium Version", "Free"];
  $scope.displayFeatureTypes = [ "Visual Scene Display", "Hot Spot", "Grid", "List"];

  $scope.selectedTypes = {
    cost: ["Free"],
    display: ["Grid"]
  };

  $scope.getMatches = function(ev) {
      // call into back end, save response to variable

       $mdDialog.show (
          $mdDialog.alert()
             .parent(angular.element(document.querySelector('#dialogContainer')))
             .clickOutsideToClose(true)
             .title('You selected: ')
             .textContent($scope.selectedTypes) // <- pass variable into textContent to display it in modal
             .ok('Ok')
             .targetEvent(ev)
       );
    };

});
