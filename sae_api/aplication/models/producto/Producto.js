/**
 * 	MODELO producto
 * 	
 *  Author : Sebastian De La Roche
 *  Descripcion : modelo encargado de manejar toda la parte transaccional de producto
 */

var BD = require("../configModels.js"); 


function Producto() 
{
	// ATRIBUTOS DEL MODELO
	
	/**
	 * name : iId
	 * type : integer
	 * access : private
	 */
	this.iId 			= null;

	/**
	 * name : sNombre
	 * type : String
	 * access : private
	 */
	this.sNombre 		= null;
	
	/**
	 * name : sDescripcion
	 * type : String
	 * access : private
	 */
	this.sDescripcion 	= null;

	/**
	 * name : iUnidadMedida
	 * type : integer
	 * access : private
	 */
	this.iUnidadMedida 	= null;

	/**
	 * name : iTipoProducto
	 * type : integer
	 * access : private
	 */
	this.iTipoProducto 	= null;


	// PROPIEDADES GET AND SET
	
	/**
	 * method : setId
	 * return : void
	 * access : public
	 */
	this.setId = function(iId){
		this.iId = iId;
	}

	/**
	 * method : getId
	 * return : integer
	 * access : public
	 */
	this.getId = function(){
		return this.iId;
	}

	/**
	 * method : setNombre
	 * return : void
	 * access : public
	 */
	this.setNombre = function(sNombre){
		this.sNombre = sNombre;
	}

	/**
	 * method : getNombre
	 * return : String
	 * access : public
	 */
	this.getNombre = function(){
		return this.sNombre;
	}
	
	/**
	 * method : setDescripcion
	 * return : void
	 * access : public
	 */
	this.setDescripcion = function(sDescripcion){
		this.sDescripcion = sDescripcion;
	}

	/**
	 * method : getDescripcion
	 * return : String
	 * access : public
	 */
	this.getDescripcion = function(){
		return this.sDescripcion;
	}

	/**
	 * method : setUnidadMedida
	 * return : void
	 * access : public
	 */
	this.setUnidadMedida = function(iUnidadMedida){
		this.iUnidadMedida = iUnidadMedida;
	}

	/**
	 * method : getUnidadMedida
	 * return : integer
	 * access : public
	 */
	this.getUnidadMedida = function(){
		return this.sDescripcion;
	}

	/**
	 * method : setTipoProducto
	 * return : void
	 * access : public
	 */
	this.setTipoProducto = function(iTipoProducto){
		this.iTipoProducto = iTipoProducto;
	}

	/**
	 * method : getTipoProducto
	 * return : integer
	 * access : public
	 */
	this.getTipoProducto = function(){
		return this.iTipoProducto;
	}


}

/**
 * Author : Sebastian De La Roche
 * method : load
 * return : Objeto (data con info. tipo producto)
 * access : public
 */

Producto.prototype.load = function () {

	var oConexion = new BD();

	var sSQL = "SELECT id, nombre, descripcion, unidadmedida, idtipoproducto FROM producto WHERE id = ?;";
	var aParams = [this.iId];

	return oConexion.queryRow(sSQL,aParams);

}

/**
 * Author : Sebastian De La Roche
 * method : crear
 * return : Integer 
 * access : public
 */

Producto.prototype.crear = function() {

	var oConexion = new BD();

	var sSQL = "INSERT INTO producto (nombre,descripcion, unidadmedida, idtipoproducto) VALUES (?,?,?,?);";
	var aParams = [this.sNombre, this.sDescripcion, this.iUnidadMedida, this.iTipoProducto];
	 
	oConexion.beginTransaction();
	return oConexion.insert(sSQL,aParams)
	.then(function (iIdproducto) {
		oConexion.commitTransaction();
		return iIdproducto;
	}, function (error) {
		oConexion.rollbackTransaction();
		return error;
	});

}

/**
 * Author : Sebastian De La Roche
 * method : editar
 * return : void 
 * access : public
 */

Producto.prototype.editar = function () {

	var oConexion = new BD();

	var sSQL = "UPDATE producto SET nombre = ?, descripcion = ?, unidadmedida = ?, idtipoproducto = ? WHERE id = ?;";
	var aParams = [this.sNombre, this.sDescripcion, this.iUnidadMedida, this.iTipoProducto, this.iId];

	oConexion.beginTransaction();
	return oConexion.query(sSQL,aParams)
	.then(function (response) {
		oConexion.commitTransaction();
		return response;
	}, function (error) {
		oConexion.rollbackTransaction();
		return error;
	});

}

/**
 * Author : Sebastian De La Roche
 * method : eliminar
 * return : void 
 * access : public
 */

Producto.prototype.eliminar = function () {

	var oConexion = new BD();

	var sSQL = "DELETE FROM producto WHERE id = ?;";
	var aParams = [this.iId];

	oConexion.beginTransaction();

	return oConexion.query(sSQL,aParams)
	.then(function (response) {
		oConexion.commitTransaction();
		return response;
	}, function (error) {
		oConexion.rollbackTransaction();
		return error;
	});

}

/**
 * Author : Sebastian De La Roche
 * method : listar
 * return : Array 
 * access : public
 */

Producto.prototype.listar = function () {
	
	var oConexion = new BD();

	var sSQL = "SELECT id, nombre, descripcion, unidadmedida, idtipoproducto FROM producto;";

	return oConexion.queryAll(sSQL);

}


module.exports = Producto;