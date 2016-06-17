/**
*  Module
*
* Description
*/
angular.module('sae.controller.inicio', ["sae.controller"])

.controller('InicioController', ['$scope', '$controller', function($scope, $controller){

	angular.extend(this, $controller('MenuController', {$scope: $scope}));


}])