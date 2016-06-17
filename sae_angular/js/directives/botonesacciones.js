/**
*  Module
*
* Description
*/
angular.module('sae.directive.botonesacciones', [])

.directive('saeBotones',['saeHttp', function(saeHttp){
	// Runs during compile
	return {
		scope: {
			data : '@'
		},
		restrict: 'E',
		templateUrl: '../../templates/directives/botonesacciones.html',
		replace: true,
		link: function(scope) {

			// var config = JSON.parse(scope.data || '[]');
			
			// Accion del evento crear/guardar
			scope.guardar = function () {

				var valoresInput = {};
				$('.sae-form').find(':input').each(function(data){
					valoresInput[this.name] = this.value;
				});

				saeHttp({
					method: "post",
					url: $('.sae-form')[0].action,
					data: valoresInput,
				})
				.then(function (response) {
					scope.$emit('guardar', response)
				})
				.catch(function (error) {
					scope.$emit('guardar', error)
				}); 

			}

			// Accion del evento cancelar
			scope.cancelar = function () {
			 	console.log("Pendiente por desarrollar ...");
			}



		}
	};
}]);