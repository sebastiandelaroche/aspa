/**
 * 	MODELO Menu
 * 	
 *  Author : Sebastian De La Roche
 *  Descripcion : modelo encargado de manejar toda la parte transaccional de menu
 */

var BD = require("../configModels.js"); 


function Menu() 
{
	
}

/**
 * Author : Sebastian De La Roche
 * method : load
 * return : Objeto (data con info. tipo producto)
 * access : public
 */

Menu.prototype.loadModulos = function () {

	var oConexion = new BD();

	var sSQLModulos = "SELECT id, nombre, nombreruta FROM modulo;";
	var sSQLControladores = "SELECT id, nombre, nombreruta, idmodulo FROM controlador;";

	return oConexion.queryAll(sSQLModulos)
	.then(function (result) {
		var aModulos = result;		
		return oConexion.queryAll(sSQLControladores)
		.then(function (result) {
			var aControladores = result;
			return {
				modulos : aModulos,
				controladores : aControladores
			}
		})

	});
}



module.exports = Menu;