/**
 * 	CONTROLLER tipocliente
 * 	
 *  Author : Sebastian De La Roche
 *  Descripcion : controlador encargado de manejar todas las acciones asociadas a tipo cliente
 */

var TipoCliente = require("../../models/cliente/TipoCliente");

// Objeto de controlador
var oTipoCliente = {};


/**
 * Author : Sebastian De La Roche
 * Method : crear
 * Descripcion : metodo encargado de crear tipo de clientes
 */

oTipoCliente.crear = function (request, response) {

	var modelo = new TipoCliente();

	// Se obtiene los campos del form
	var sNombre = request.body.nombre !== "" ? request.body.nombre : null;
	var sDecripcion = request.body.descripcion !== "" ? request.body.descripcion : null;

	modelo.setNombre(sNombre);
	modelo.setDescripcion(sDecripcion);
	
	// Se llama el modelo para la creacion
	modelo.crear()
	.then(function (respuesta) {

		var iIdCliente = respuesta;
		modelo.setId(iIdCliente);

		modelo.load()
		.then(function(result) {
			response.status(200).json(result);
		})


	}, function (error) {
		response.status(500).json(error);
	})
}

/**
 * Author : Sebastian De La Roche
 * Method : editar
 * Descripcion : metodo encargado de editar tipo de clientes
 */

oTipoCliente.editar = function (request, response) {


	// Se obtiene las información del tipo cliente
	if (request.method === 'GET') {

		var modelo = new TipoCliente();

		modelo.setId(request.params.id);

		modelo.load()
		.then(function (respuesta) {
			response.status(200).json(respuesta);
		}, function (error) {
			response.status(500).json(error);
		})
	}
	else
	{
		// Se edita el tipo de cliente

		var modelo = new TipoCliente();

		// Se obtiene los campos del form
		var iId = request.body.id;
		var sNombre = request.body.nombre !== "" ? request.body.nombre : null;
		var sDecripcion = request.body.descripcion !== "" ? request.body.descripcion : null;

		modelo.setId(iId);
		modelo.setNombre(sNombre);
		modelo.setDescripcion(sDecripcion);

		modelo.editar()
		.then(function (respuesta) {
			response.status(200).json(respuesta);
		}, function (error) {
			response.status(500).json(error);
		});

	}
}

/**
 * Author : Sebastian De La Roche
 * Method : eliminar
 * Descripcion : metodo encargado de eliminar tipo de cliente
 */

oTipoCliente.eliminar = function (request, response) {

	var modelo = new TipoCliente();

	modelo.setId(request.params.id);

	modelo.eliminar()
	.then(function (respuesta) {
		response.status(200).json(respuesta);
	}, function (error) {
		response.status(500).json(error);
	})

}

/**
 * Author : Sebastian De La Roche
 * Method : listar
 * Descripcion : metodo encargado de listar los tipos de clientes
 */

oTipoCliente.listar = function (request, response) {

	var modelo = new TipoCliente();

	modelo.listar()
	.then(function (respuesta) {
		response.status(200).json(respuesta);
	}, function (error) {
		response.status(500).json(error);
	})
}

module.exports = oTipoCliente;