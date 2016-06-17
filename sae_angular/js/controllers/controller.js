/**
*  Module
*
* Description
*/
angular.module('sae.controller', [])

.controller('MenuController', ['$scope', 'saeHttp', function($scope, saeHttp){

	saeHttp({
		method: "get",
		url: '/api/configuracion/menu'
	})
	.then(function (data) {
		$scope.modulos = data;
	})
	.catch(function (error) {
		console.log(error);
	});

}])