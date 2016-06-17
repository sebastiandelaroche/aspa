/**
 * 	CONTROLLER menu
 * 	
 *  Author : Sebastian De La Roche
 *  Descripcion : controlador encargado de manejar todas las acciones asociadas a Menu
 */

var Menu = require("../../models/configuracion/Menu");

// Objeto de controlador
var oMenu = {};

/**
 * Author : Sebastian De La Roche
 * Method : crear
 * Descripcion : metodo encargado de listar los modulos del sistema
 */

oMenu.obtenerModulos = function (request, response) {

	var modelo = new Menu();

	// Se obtienen los modulos y controladores
	modelo.loadModulos()
	.then(function (respuesta) {

		var oData = respuesta;

		var aModulos = {};
		// Se normalizan los modulos
		oData.modulos.forEach(function (modulo) {
			aModulos[modulo.id] = modulo;
			aModulos[modulo.id].controladores = [];
		});

		// Se asiganan los controladores a los respectivos modulos
		oData.controladores.forEach(function (controlador) {
			aModulos[controlador.idmodulo].controladores.push(controlador);
		});

		response.status(200).json(aModulos);
		
	}, function (error) {
		response.status(500).json(false);
	})
}


module.exports = oMenu;