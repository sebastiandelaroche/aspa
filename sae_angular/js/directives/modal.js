/**
*  	Module: sae.directive.modal
*
* 	Description: Directive encarga manipular todo lo relacionado con los modales
*/


/*

		
			idControl : "id control"
			type: "large|meduim|small",
			title: "string",
			idShow: "id nodo DOM, for show",
			state: "close"
			idModal: "id del modal"

*/


angular.module('sae.directive.modal', [])


.directive('saeModal', function() {
	
	return {
		scope: {
			config: "@"
		},
		restrict: 'E',
		templateUrl: '../../templates/directives/modal.html',
		link: function(scope) {
		
			scope.$watch('config', function (newConfig) {
				// CONFIGURACIÓN INICIAL
				var oConfig = JSON.parse(newConfig || '{}');
				
				oConfig.idModal = "modal_" + oConfig.idShow;
				oConfig.content = "content_" + oConfig.idShow;

				oConfig.clazz = "";
				oConfig.logitud = "";

				// se configura la el tamaño del modal
				if(oConfig.type === 'large')
				{
					oConfig.clazz = "bs-example-modal-lg";
					oConfig.logitud = "modal-lg";
				}
				else if(oConfig.type === 'small') 
				{
					oConfig.clazz = "bs-example-modal-sm";
					oConfig.logitud = "modal-sm";
				}

			    angular.element(document).ready(function () {
					var html = $("#" + oConfig.idShow).html();
					$("#" + oConfig.content).html(html);

			    });

				scope.modal = oConfig;

			})

		}
	};
});