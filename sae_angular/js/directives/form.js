/**
*  Module
*
*  Description
*/
angular.module('sae.directive.form', [])

.directive('saeForm',["saeHttp", function (saeHttp) {
	return {
		scope: {
			data: "@"
		},
		restrict: 'E',
		templateUrl: '../../templates/directives/form.html',
		link: function(scope) {			
			scope.config = JSON.parse(scope.data || "[]");
			scope.config.method = scope.config.method || "POST";

			scope.config.fn = function () {
				alert("XXXXX");
			}

			scope.enviarForm = function () {
				
				var valoresInput = {};
				var bCamposVacios = false;

				$('.input').each(function (data) {
					var validar = Boolean($(this).attr("validate"));
					if(validar === true && this.value.length === 0) {
						$(this).addClass('sae-red');
						bCamposVacios = true;
					}
					else
					{
						$(this).removeClass('sae-red');
						valoresInput[this.name] = this.value;
					}
				})

				if(bCamposVacios === true)
				{
					return false;
				}

				saeHttp({
					method: "post",
					url: $('.sae-form')[0].action,
					data: valoresInput,
				})
				.then(function (response) {
					var oRespuesta = {
						success: true,
						fail: false,
						response: response
					};

					$('.input').each(function (data) {
						this.value = "";
					});

					scope.$emit(scope.config.listenEvent, oRespuesta);
				})
				.catch(function (error) {
					var oRespuesta = {
						success: false,
						fail: true,
						response: error
					};

					$('.input').each(function (data) {
						this.value = "";
					});

					scope.$emit(scope.config.listenEvent, oRespuesta);
				});

			}


		}
	}
}]);