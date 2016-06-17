/**
*  Module
*
* Description
*/
angular.module('sae.directive.acciones', [])

.directive('saeAcciones', function(){
	// Runs during compile
	return {
		scope: {
			data : "@"
		},
		restrict: 'E',
		templateUrl: '../../templates/directives/acciones.html',
		replace: true,
		link: function(scope) {
			
			scope.values = JSON.parse(scope.data || '[]');


		}
	};
});