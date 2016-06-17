/**
 * 	CONTROLLER servicio
 * 	
 *  Author : Sebastian De La Roche
 *  Descripcion : controlador encargado de manejar todas las acciones asociadas a servicio
 */

var Servicio = require("../../models/servicio/Servicio");

// Objeto de controlador
var oServicio = {};


/**
 * Author : Sebastian De La Roche
 * Method : crear
 * Descripcion : metodo encargado de crear servicios
 */

oServicio.crear = function (request, response) {

	var modelo = new Servicio();

	// Se obtiene los campos del form
	var sNombre = request.body.nombre !== "" ? request.body.nombre : null;
	var sDecripcion = request.body.descripcion !== "" ? request.body.descripcion : null;
	var dValorFactura = request.body.valorfactura !== "" ? request.body.valorfactura : null;
	var iIdTipoServicio = request.body.idtiposervicio !== "" ? request.body.idtiposervicio : null;

	modelo.setNombre(sNombre);
	modelo.setDescripcion(sDecripcion);
	modelo.setValorSevicio(dValorFactura);
	modelo.setIdTipoServicio(iIdTipoServicio);

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
 * Descripcion : metodo encargado de editar servicios
 */

oServicio.editar = function (request, response) {

	// Se obtiene las información de servicios
	if (request.method === 'GET') {

		var modelo = new Servicio();

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
		// Se edita el servicio

		var modelo = new Servicio();

		// Se obtiene los campos del form
		var iId = request.body.id;
		var sNombre = request.body.nombre !== "" ? request.body.nombre : null;
		var sDecripcion = request.body.descripcion !== "" ? request.body.descripcion : null;
		var dValorFactura = request.body.valorfactura !== "" ? request.body.valorfactura : null;
		var iIdTipoServicio = request.body.idtiposervicio !== "" ? request.body.idtiposervicio : null;

		modelo.setId(iId);
		modelo.setNombre(sNombre);
		modelo.setDescripcion(sDecripcion);
		modelo.setValorSevicio(dValorFactura);
		modelo.setIdTipoServicio(iIdTipoServicio);

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
 * Descripcion : metodo encargado de eliminar servicios
 */

oServicio.eliminar = function (request, response) {

	var modelo = new Servicio();

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
 * Descripcion : metodo encargado de listar servicios
 */

oServicio.listar = function (request, response) {

	var modelo = new Servicio();

	modelo.listar()
	.then(function (respuesta) {
		response.status(200).json(respuesta);
	}, function (error) {
		response.status(500).json(error);
	})

}

module.exports = oServicio;