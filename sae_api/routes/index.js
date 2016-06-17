/**
 *	ENRUTADOR
 * 
 *  Author Sebastian De La Roche
 *  Descripción Mapeador encargado de asociar una ruta REST a una funcion lógica
 * 
 */

module.exports = function (app) {

	// Se importan los controladores
	oMenu 	 		= require('../aplication/controllers/configuracion/menuController');
	oTipoCliente 	= require('../aplication/controllers/cliente/tipoclienteController');
	oCliente 		= require('../aplication/controllers/cliente/clienteController');
	oTipoProducto 	= require('../aplication/controllers/producto/tipoproductoController');
	oProducto 		= require('../aplication/controllers/producto/productoController');
	otipoServicio 	= require('../aplication/controllers/servicio/tiposervicioController');
	oServicio 		= require('../aplication/controllers/servicio/servicioController');


	// Ruta unica en la que se carga la homepage del software
	app.get('/', function(req, res, next) {
		res.sendfile('../../sae_angular/index.html');
	});
	
	//	REST ENCARGADOS DE MANEJAR LA CONFIGURACION DEL SOFTWARE
	// BEGIN CONFIGURACION SAE
	app.get('/api/configuracion/menu'	, oMenu.obtenerModulos);	
	// END CONFIGURACION SAE

	//	REST ENCARGADOS DE MANEJAR LOS TIPOS DE CLIENTES
	//	BEGIN TIPO CLIENTES
	app.post('/api/tipocliente/crear'		, oTipoCliente.crear);
	app.get('/api/tipocliente/editar/:id'	, oTipoCliente.editar);
	app.post('/api/tipocliente/editar'		, oTipoCliente.editar);
	app.get('/api/tipocliente/lista'		, oTipoCliente.listar);	
	app.post('/api/tipocliente/eliminar/:id', oTipoCliente.eliminar);		
	// END TIPO CLIENTES

	//	REST ENCARGADOS DE MANEJAR CLIENTE
	//	BEGIN CLIENTES
	app.post('/api/cliente/crear'		, oCliente.crear);
	app.get('/api/cliente/editar/:id'	, oCliente.editar);
	app.post('/api/cliente/editar'		, oCliente.editar);
	app.post('/api/cliente/eliminar/:id', oCliente.eliminar);
	app.get('/api/cliente/listar' 		, oCliente.listar);
	// END CLIENTE

	//	REST ENCARGADOS DE MANEJAR TIPO DE PRODUCTOS
	//	BEGIN TIPO DE PRODUCTOS
	app.post('/api/tipoproducto/crear'			, oTipoProducto.crear);
	app.get('/api/tipoproducto/editar/:id'		, oTipoProducto.editar);
	app.post('/api/tipoproducto/editar'			, oTipoProducto.editar);
	app.post('/api/tipoproducto/eliminar/:id'	, oTipoProducto.eliminar);
	app.get('/api/tipoproducto/listar' 			, oTipoProducto.listar);
	// END TIPO DE PRODUCTOS


	//	REST ENCARGADOS DE MANEJAR PRODUCTOS
	//	BEGIN PRODUCTOS
	app.post('/api/producto/crear'			, oProducto.crear);
	app.get('/api/producto/editar/:id'		, oProducto.editar);
	app.post('/api/producto/editar'			, oProducto.editar);
	app.post('/api/producto/eliminar/:id'	, oProducto.eliminar);
	app.get('/api/producto/listar' 			, oProducto.listar);
	// END PRODUCTOS


	//	REST ENCARGADOS DE MANEJAR TIPO SERVICIO
	//	BEGIN TIPO SERVICIO
	app.post('/api/tiposervicio/crear'			, otipoServicio.crear);
	app.get('/api/tiposervicio/editar/:id'		, otipoServicio.editar);
	app.post('/api/tiposervicio/editar'			, otipoServicio.editar);
	app.post('/api/tiposervicio/eliminar/:id'	, otipoServicio.eliminar);
	app.get('/api/tiposervicio/listar' 			, otipoServicio.listar);
	// END TIPO SERVICIO


	//	REST ENCARGADOS DE MANEJAR SERVICIO
	//	BEGIN SERVICIO
	app.post('/api/servicio/crear'			, oServicio.crear);
	app.get('/api/servicio/editar/:id'		, oServicio.editar);
	app.post('/api/servicio/editar'			, oServicio.editar);
	app.post('/api/servicio/eliminar/:id'	, oServicio.eliminar);
	app.get('/api/servicio/listar' 			, oServicio.listar);
	// END  SERVICIO




}