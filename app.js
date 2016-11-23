var myApp = angular.module('myApp', []);

// myApp.config(['$qProvider', function ($qProvider) {
//     $qProvider.errorOnUnhandledRejections(false);
// }]);

myApp.controller("MyController",function($scope, $http)
 {
   $http.get('phonebook.json').success(function(response){

      $scope.staffs = response;
      $scope.orderStaff='forename';
    });
 });


