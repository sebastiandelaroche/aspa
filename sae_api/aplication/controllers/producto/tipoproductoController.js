/**
 * 	CONTROLLER tipoproducto
 * 	
 *  Author : Sebastian De La Roche
 *  Descripcion : controlador encargado de manejar todas las acciones asociadas a tipo producto
 */

var TipoProducto = require("../../models/producto/TipoProducto");

// Objeto de controlador
var oTipoProducto = {};


/**
 * Author : Sebastian De La Roche
 * Method : crear
 * Descripcion : metodo encargado de crear tipo de productos
 */

oTipoProducto.crear = function (request, response) {

	var modelo = new TipoProducto();

	// Se obtiene los campos del form
	var sNombre = request.body.nombre !== "" ? request.body.nombre : null;
	var sDecripcion = request.body.descripcion !== "" ? request.body.descripcion : null;

	modelo.setNombre(sNombre);
	modelo.setDescripcion(sDecripcion);
	
	// Se llama el modelo para la creacion
	modelo.crear()
	.then(function (respuesta) {
		response.status(200).json(respuesta);
	}, function (error) {
		response.status(500).json(false);
	})
}

/**
 * Author : Sebastian De La Roche
 * Method : editar
 * Descripcion : metodo encargado de editar tipo de productos
 */

oTipoProducto.editar = function (request, response) {

	// Se obtiene las información del tipo producto
	if (request.method === 'GET') {

		var modelo = new TipoProducto();

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
		// Se edita el tipo de productos

		var modelo = new TipoProducto();

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
 * Descripcion : metodo encargado de eliminar tipo de productos
 */

oTipoProducto.eliminar = function (request, response) {

	var modelo = new TipoProducto();

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
 * Descripcion : metodo encargado de listar los tipo de productos
 */

oTipoProducto.listar = function (request, response) {

	var modelo = new TipoProducto();

	modelo.listar()
	.then(function (respuesta) {
		response.status(200).json(respuesta);
	}, function (error) {
		response.status(500).json(error);
	})

}

module.exports = oTipoProducto;