/**
*  Module
*
* Description
*/
angular.module('sae.controller.tipocliente', [
	'sae.directive.modal'
])

.controller('TipoClienteController', ['$scope', '$routeParams', 'saeHttp', 'Lista', function($scope, $routeParams, saeHttp, Lista){
	

	// SE LISTAN LOS TIPOS DE CLIENTES

	saeHttp({
		method: "get",
		url: '/api/tipocliente/lista'
	})
	.then(function (response) {

		var data = {};

		data.data = response;
		
		// SE DEFINEN LAS COLUMNAS DE LA LISTA
		data.columns = [{
	      field: "nombre",
	      title: "Nombre",
	      filter: {
	        nombre: "text"
	      },
	      sortable: "nombre",
	      show: true
	    }, {
	      field: "descripcion",
	      title: "Descripción",
	      filter: {
	        descripcion: "text"
	      },
	      sortable: "descripcion",
	      show: true
	    }, {
	      field: "action",
	      title: "",
	      dataType: "command",
	      acciones : {
	      	editar 		: {
	      		show: true,
	      		connect: "editarTipoCliente"
	      	},
	      	eliminar 	: {
				show: true,
				connect: "eliminarTipoCliente"
	      	}
	      }
	    }];

		$scope.data = data;

	})
	.catch(function (error) {
		console.log(error);
	});

	// SE DEFINE LA CONFIGURACION DEL MODAL PARA EL FORM DE CREAR TIPO CLIENTE
	$scope.modalFormCrear = {
		idControl: "btn-form-crear",
		type: "large",
		title: "Crear tipo cliente",
		idShow: "form-crear"
	};

	// SE DEFINE LA CONFIGURACION DEL MODAL PARA EL FORM DE EDITAR TIPO CLIENTE
	$scope.modalFormEditar = {
		idControl: "btn-form-editar",
		type: "large",
		title: "Editar tipo cliente",
		idShow: "form-editar"
	};


	// SE DEFINE LA CONFIGURACION PARA EL FORM DE CREAR
	$scope.formCrear = {
		"action" : "/api/tipocliente/crear",
		"listenEvent" : "crearTipoCliente",
		"camps" : [{
					"type": "text",
					"label": "Nombre",
					"name": "nombre",
					"validate": true,
					"message": "Nombre"
				  }, {
					"type": "textarea",
					"label": "Descripción",
					"name": "descripcion"
				  }]

	};


	/***************************
	 * 		LISTEN OF EVENT 
	 **************************/

	$scope.$on($scope.formCrear.listenEvent, function (event, response) {
		var oData = response.response;
		// Se agrega nuevo elemento en la lista
		Lista.AddRow(oData);
		// Se oculta el popup del form
		$("#close").click();
	});


// EDITAR
	$scope.$on("editarTipoCliente", function (event, response) {
		console.log("EDITAR");
		console.log(response);
		$("#btn-form-editar").click();
	});

// ELIMINAR
	$scope.$on("eliminarTipoCliente", function (event, response) {

		var oData = response;


		$("#eliminar").click();
		var msg = "<p>Esta seguro de eliminar el tipo cliente <strong>" +oData.nombre+ "</strong>, si lo eliminas se perderan todos los datos asociados al tipo cliente.</p>";
		$("#msgDelete").html(msg);

		$scope.eliminar = function () {

			saeHttp({
				method: "post",
				url: '/api/tipocliente/eliminar/' + oData.id
			})
			.then(function (response) {
				Lista.DeleteRow(oData);
			})
			.catch(function (error) {
				error.fn();
			})

		}

	});

	/*************************
	 * 		FUNCTION
	 ************************/

	 $scope.openModalCrear = function (){
 	 	var control = $scope.modalFormCrear.idControl;
 	 	$("#" + control).click();
	 }









	
}]);