/**
 * 	MODELO tipoproducto
 * 	
 *  Author : Sebastian De La Roche
 *  Descripcion : modelo encargado de manejar toda la parte transaccional de tipo producto
 */

var BD = require("../configModels.js"); 


function TipoProducto() 
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

}

/**
 * Author : Sebastian De La Roche
 * method : load
 * return : Objeto (data con info. tipo producto)
 * access : public
 */

TipoProducto.prototype.load = function () {

	var oConexion = new BD();

	var sSQL = "SELECT id, nombre, descripcion FROM tipoproducto WHERE id = ?;";
	var aParams = [this.iId];

	return oConexion.queryRow(sSQL,aParams);

}

/**
 * Author : Sebastian De La Roche
 * method : crear
 * return : Integer 
 * access : public
 */

TipoProducto.prototype.crear = function() {

	var oConexion = new BD();

	var sSQL = "INSERT INTO tipoproducto (nombre,descripcion) VALUES (?,?);";
	var aParams = [this.sNombre, this.sDescripcion];

	return oConexion.insert(sSQL,aParams);

}

/**
 * Author : Sebastian De La Roche
 * method : editar
 * return : void 
 * access : public
 */

TipoProducto.prototype.editar = function () {

	var oConexion = new BD();

	var sSQL = "UPDATE tipoproducto SET nombre = ?, descripcion = ? WHERE id = ?;";
	var aParams = [this.sNombre, this.sDescripcion, this.iId];

	return oConexion.query(sSQL,aParams);

}

/**
 * Author : Sebastian De La Roche
 * method : eliminar
 * return : void 
 * access : public
 */

TipoProducto.prototype.eliminar = function () {

	var oConexion = new BD();

	var sSQL = "DELETE FROM tipoproducto WHERE id = ?;";
	var aParams = [this.iId];

	return oConexion.query(sSQL,aParams);

}

/**
 * Author : Sebastian De La Roche
 * method : listar
 * return : Array 
 * access : public
 */

TipoProducto.prototype.listar = function () {
	
	var oConexion = new BD();

	var sSQL = "SELECT id, nombre, descripcion FROM tipoproducto;";

	return oConexion.queryAll(sSQL);

}


module.exports = TipoProducto;