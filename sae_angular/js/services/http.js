 /**
*  Module
*
* Description
*/
angular.module('sae.services.http', [])

.constant('CONST', {
	msgError: '<div class="alert alert-warning alert-dismissible" role="alert">
				<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<strong>Warning!</strong> #MGS#
			  </div>'
})

.service('saeHttp', ['$http', '$q', 'CONST', function($http, $q, CONST) {
	
	return function (config) {

		var deferred = $q.defer();

		$http(config)
		.then(function (response) {
			deferred.resolve(response.data);
		}, function (error) {
			var oError = error.data;
			
			deferred.reject({
				fn: function () {
					var sMgs =  CONST.msgError.replace("#MGS#", oError.sError);
					$("#contenedorError").html(sMgs);
				},
				oError: oError
			});
		});

		return deferred.promise;

	}

}])