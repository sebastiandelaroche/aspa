/**
*  Module
*
* Description
*/
angular.module('SAE', [
	'ngRoute',
	'sae.controller.inicio',
  'sae.directive.header',
  'sae.directive.menu',
  'sae.controller.tipocliente',
  'sae.directive.acciones',
  'ngTable',
  'sae.directive.botonesacciones',
  'sae.services.http',
  'sae.directive.listageneral',
  'ngMaterial',
  'sae.directive.form'
])

.config(['$routeProvider',function($routeProvider) {
	
	$routeProvider
      
     .when('/', {
        templateUrl: 'templates/controllers/inicio.html',
        controller: 'InicioController'
      })

     .when('/tipocliente/index', {
        templateUrl: 'templates/controllers/indextipocliente.html',
        controller: 'TipoClienteController'
      })

     .when('/cliente/index', {
        templateUrl: 'templates/controllers/indexcliente.html',
        controller: 'TipoClienteController'
      })

     .otherwise({
        redirectTo: '/'
      });

}])