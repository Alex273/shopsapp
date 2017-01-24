var myApp = angular.module('myApp',['ng-sortable']);

myApp.controller('myShopListCtrl', ['$scope', function ($scope) {
            
 $scope.list=[];

$scope.add = function () {                     
                   
if ($scope.name != '' ) { 
                    $scope.list.push(
                    { 
                     name: $scope.name, 
                     street: $scope.street,
                     houseNumber: $scope.houseNumber,
                     workTime: $scope.workTime,
                     productName: $scope.productName,
                     description: $scope.description, 
                    });

                    // clear fields
                    $scope.name = '';
                    $scope.street = '';
                    $scope.houseNumber = '';
                    $scope.workTime = '';
                    $scope.productName = '';
                    $scope.description = '';

                };
            };
    }
]);
 

   