/**
 * 	CONTROLLER producto
 * 	
 *  Author : Sebastian De La Roche
 *  Descripcion : controlador encargado de manejar todas las acciones asociadas a producto
 */

var Producto = require("../../models/producto/Producto");

// Objeto de controlador
var oProducto = {};


/**
 * Author : Sebastian De La Roche
 * Method : crear
 * Descripcion : metodo encargado de crear productos
 */

oProducto.crear = function (request, response) {

	var modelo = new Producto();

	// Se obtiene los campos del form
	var sNombre = request.body.nombre !== "" ? request.body.nombre : null;
	var sDecripcion = request.body.descripcion !== "" ? request.body.descripcion : null;
	var iUnidadMedida = request.body.unidadmedida !== "" ? request.body.unidadmedida : null;
	var iIdTipoProducto  = request.body.idtipoproducto !== "" ? request.body.idtipoproducto : null;

	modelo.setNombre(sNombre);
	modelo.setDescripcion(sDecripcion);
	modelo.setUnidadMedida(iUnidadMedida);
	modelo.setTipoProducto(iIdTipoProducto);
	
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
 * Descripcion : metodo encargado de editar productos
 */

oProducto.editar = function (request, response) {

	// Se obtiene las información del producto
	if (request.method === 'GET') {

		var modelo = new Producto();

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
		// Se edita el producto

		var modelo = new Producto();

		// Se obtiene los campos del form
		var iId = request.body.id;
		var sNombre = request.body.nombre !== "" ? request.body.nombre : null;
		var sDecripcion = request.body.descripcion !== "" ? request.body.descripcion : null;
		var iUnidadMedida = request.body.unidadmedida !== "" ? request.body.unidadmedida : null;
		var iIdTipoProducto  = request.body.idtipoproducto !== "" ? request.body.idtipoproducto : null;

		modelo.setId(iId);
		modelo.setNombre(sNombre);
		modelo.setDescripcion(sDecripcion);
		modelo.setUnidadMedida(iUnidadMedida);
		modelo.setTipoProducto(iIdTipoProducto);

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

oProducto.eliminar = function (request, response) {

	var modelo = new Producto();

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
 * Descripcion : metodo encargado de listar los productos
 */

oProducto.listar = function (request, response) {

	var modelo = new Producto();

	modelo.listar()
	.then(function (respuesta) {
		response.status(200).json(respuesta);
	}, function (error) {
		response.status(500).json(error);
	})

}

module.exports = oProducto;