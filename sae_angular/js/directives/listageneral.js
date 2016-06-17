/**
*  Module
*
* Description
*/
angular.module('sae.directive.listageneral', [])


.factory('Lista', ['NgTableParams', function(NgTableParams) {
	
	var oLista = {};

	/**
	 * Author: Sebastian De La Roche
	 * Property: oNgTableParams Objeto
	 * Acces: public
	 */

	oLista.oNgTableParams = {};


	/**
	 * Author: Sebastian De La Roche
	 * Method: Inicializador
	 * Acces: public
	 */
	
	oLista.Inicializador = function (oData) {
		oLista.oNgTableParams = new NgTableParams({
			page: 1,count: 10
		}, {
			data: oData
		});
	}	

	/**
	 * Author: Sebastian De La Roche
	 * Method: Add
	 * Acces: public
	 * Description: Funcion encargada de adicionar un nuevo elemento en la lista
	 */

	oLista.AddRow = function (row) {

		oLista.oNgTableParams.settings().data.unshift(row);
		// we need to ensure the user sees the new row we've just added.
		// it seems a poor but reliable choice to remove sorting and move them to the first page
		// where we know that our new item was added to
		oLista.oNgTableParams.sorting({});
		oLista.oNgTableParams.page(1);
		oLista.oNgTableParams.reload();

	}

	/**
	 * Author: Sebastian De La Roche
	 * Method: DeleteRow
	 * Acces: public
	 * Description: Funcion encargada de eliminar un elemento de la lista
	 * 
	 */

	 oLista.DeleteRow = function (row) {

	 	var array = oLista.oNgTableParams.settings().data;

	 	for (var i = 0; i < array.length; i++) {
	 		if(array[i].id === row.id){
				oLista.oNgTableParams.settings().data.splice(i,1);
	 		}
	 	}

		oLista.oNgTableParams.reload().then(function(data) {
			if (data.length === 0 && oLista.oNgTableParams.total() > 0) {
				oLista.oNgTableParams.page(oLista.oNgTableParams.page() - 1);
				oLista.oNgTableParams.reload();
			}
		});

	 }

	return oLista;

}])


.directive('saeListageneral', ['Lista', function(Lista){
	// Runs during compile
	return {
		scope: {
			data : '@'
		},
		restrict: 'E',
		templateUrl: '../../templates/directives/listageneral.html',
		link: function(scope) {

			scope.$watch('data', function (newData) {			
				scope.values = JSON.parse(newData || '[]');
				actionLista();
			})

			/**
			 * Se inicializa la lista
			 */

			function actionLista() {

				var data    = scope.values.data || [];
				scope.cols  = scope.values.columns  || [];

				Lista.Inicializador(data);
				scope.tableParams = Lista.oNgTableParams;				
			}

			/**
			 * Evento editar
			 */

			scope.editar = function (connect, id) {
				scope.$emit(connect, id);
			}

			/**
			 * Evento eliminar
			 */

			scope.eliminar = function (connect, row) {
				
				scope.$emit(connect, row);
			}

			/**
			 * Evento ver
			 */

			scope.ver = function (connect, id) {
				scope.$emit(connect, id);
			}


			/*
			scope.applyGlobalSearch = function (){	     
		      var term = scope.globalSearchTerm;
		      scope.tableParams.filter({ name: term });
		    }*/

		}
	};
}]);