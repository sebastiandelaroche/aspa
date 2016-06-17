/**
 * 	CONTROLLER cliente
 * 	
 *  Author : Sebastian De La Roche
 *  Descripcion : controlador encargado de manejar todas las acciones asociadas a cliente
 */

var Cliente = require("../../models/cliente/Cliente");

// Objeto de controlador
var oCliente = {};


/**
 * Author : Sebastian De La Roche
 * Method : crear
 * Descripcion : metodo encargado de crear clientes
 */

oCliente.crear = function (request, response) {

		var modelo = new Cliente();
		//Se obtienen los datos del form
		var sNit = request.body.nit;
		var sNombre =  request.body.nombre !== "" ? request.body.nombre : null;
		var sEmail = request.body.email;
		var sTelefono = request.body.telefono;
		var sMovil = request.body.movil;
		var iIdTipoCliente = request.body.idtipocliente !== "" ? request.body.idtipocliente: null;
		var sNombreUrbanizacion = request.body.nombreurbanizacion !== "" ? request.body.nombreurbanizacion: null;
		var sDireccion = request.body.direccion !== "" ? request.body.direccion : null;
		var sZona = request.body.zona;

		// Se setean las propiedades
		modelo.setNit(sNit);
		modelo.setNombre(sNombre);
		modelo.setEmail(sEmail);
		modelo.setTelefono(sTelefono);
		modelo.setMovil(sMovil);
		modelo.setIdTipoCliente(iIdTipoCliente);
		modelo.setNombreUrbanizacion(sNombreUrbanizacion);
		modelo.setDireccion(sDireccion);
		modelo.setZona(sZona);

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
 * Descripcion : metodo encargado de editar clientes
 */

oCliente.editar = function (request, response) {

	// Se obtiene las información del cliente
	if (request.method === 'GET') {

		var modelo = new Cliente();

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
		// Se edita el cliente

		var modelo = new Cliente();

		//Se obtienen los datos del form
		var iId = request.body.id;
		var sNit = request.body.nit;
		var sNombre =  request.body.nombre !== "" ? request.body.nombre : null;
		var sEmail = request.body.email;
		var sTelefono = request.body.telefono;
		var sMovil = request.body.movil;
		var iIdTipoCliente = request.body.idtipocliente !== "" ? request.body.idtipocliente: null;
		var sNombreUrbanizacion = request.body.nombreurbanizacion !== "" ? request.body.nombreurbanizacion: null;
		var sDireccion = request.body.direccion !== "" ? request.body.direccion : null;
		var sZona = request.body.zona;

		// Se setean las propiedades
		modelo.setId(iId);
		modelo.setNit(sNit);
		modelo.setNombre(sNombre);
		modelo.setEmail(sEmail);
		modelo.setTelefono(sTelefono);
		modelo.setMovil(sMovil);
		modelo.setIdTipoCliente(iIdTipoCliente);
		modelo.setNombreUrbanizacion(sNombreUrbanizacion);
		modelo.setDireccion(sDireccion);
		modelo.setZona(sZona);

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
 * Descripcion : metodo encargado de eliminar cliente
 */

oCliente.eliminar = function (request, response) {

	var modelo = new Cliente();

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
 * Descripcion : metodo encargado de listar los clientes
 */

oCliente.listar = function (request, response) {

	var modelo = new Cliente();

	modelo.listar()
	.then(function (respuesta) {
		response.status(200).json(respuesta);
	}, function (error) {
		response.status(500).json(error);
	})
}

module.exports = oCliente;