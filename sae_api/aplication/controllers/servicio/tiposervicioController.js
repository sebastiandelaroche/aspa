/**
 * 	CONTROLLER tiposervicio
 * 	
 *  Author : Sebastian De La Roche
 *  Descripcion : controlador encargado de manejar todas las acciones asociadas a tipo servicio
 */

var TipoServicio = require("../../models/servicio/TipoServicio");

// Objeto de controlador
var oTipoServicio = {};


/**
 * Author : Sebastian De La Roche
 * Method : crear
 * Descripcion : metodo encargado de crear tipo servicios
 */

oTipoServicio.crear = function (request, response) {

	var modelo = new TipoServicio();

	// Se obtiene los campos del form
	var sNombre = request.body.nombre !== "" ? request.body.nombre : null;
	var sDecripcion = request.body.descripcion !== "" ? request.body.descripcion : null;
	var iIdFactura = request.body.idfactura !== "" ? request.body.idfactura : null;

	modelo.setNombre(sNombre);
	modelo.setDescripcion(sDecripcion);
	modelo.setIdfactura(iIdFactura);

	// Se llama el modelo para la creacion
	modelo.crear()
	.then(function (respuesta) {
		response.status(200).json(respuesta);
	}, function (error) {
		response.status(500).json(error);
	})
}

/**
 * Author : Sebastian De La Roche
 * Method : editar
 * Descripcion : metodo encargado de editar tipo de servicios
 */

oTipoServicio.editar = function (request, response) {

	// Se obtiene las información del tipo servicios
	if (request.method === 'GET') {

		var modelo = new TipoServicio();

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
		// Se edita el tipo de servicios

		var modelo = new TipoServicio();

		// Se obtiene los campos del form
		var iId = request.body.id !== "" ? request.body.id : null;
		var sNombre = request.body.nombre !== "" ? request.body.nombre : null;
		var sDecripcion = request.body.descripcion !== "" ? request.body.descripcion : null;
		var iIdFactura = request.body.idfactura !== "" ? request.body.idfactura : null;

		modelo.setId(iId);
		modelo.setNombre(sNombre);
		modelo.setDescripcion(sDecripcion);
		modelo.setIdfactura(iIdFactura);

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
 * Descripcion : metodo encargado de eliminar tipo de servicios
 */

oTipoServicio.eliminar = function (request, response) {

	var modelo = new TipoServicio();

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
 * Descripcion : metodo encargado de listar los tipo de servicios
 */

oTipoServicio.listar = function (request, response) {

	var modelo = new TipoServicio();

	modelo.listar()
	.then(function (respuesta) {
		response.status(200).json(respuesta);
	}, function (error) {
		response.status(500).json(error);
	})

}

module.exports = oTipoServicio;