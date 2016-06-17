/**
*  Module
*
* Description
*/
angular.module('sae.directive.menu', [])

.directive('saeMenu', function(){
	// Runs during compile
	return {
		scope: {
			data : "@"
		},
		restrict: 'E',
		templateUrl: '../../templates/directives/menu.html',
		replace: true,
		link: function(scope) {

			scope.values = JSON.parse(scope.data || '[]');

			scope.$watch('data', function (newData) {
				
				scope.values = JSON.parse(newData || "[]");				

				angular.element(document).ready(function() {
					$('#side-menu').metisMenu();
		        });
					
			});
			
		}
	};
});