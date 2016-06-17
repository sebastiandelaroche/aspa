/**
 * 	MODELO tiposervicio
 * 	
 *  Author : Sebastian De La Roche
 *  Descripcion : modelo encargado de manejar toda la parte transaccional de tipo servicio
 */

var BD = require("../configModels.js");


function TipoServicio() 
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
	 * name : iIdfactura
	 * type : integer
	 * access : private
	 */
	this.iIdfactura 	= null;


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
	 * method : setIdfactura
	 * return : void
	 * access : public
	 */
	this.setIdfactura = function(iIdfactura){
		this.iIdfactura = iIdfactura;
	}

	/**
	 * method : getIdfactura
	 * return : Integer
	 * access : public
	 */
	this.getIdfactura = function(){
		return this.iIdfactura;
	}

}

/**
 * Author : Sebastian De La Roche
 * method : load
 * return : Objeto (data con info. tipo servicio)
 * access : public
 */

TipoServicio.prototype.load = function () {

	var oConexion = new BD();

	var sSQL = "SELECT id, nombre, descripcion, idfactura FROM tiposervicio WHERE id = ?;";
	var aParams = [this.iId];

	return oConexion.queryRow(sSQL,aParams);

}

/**
 * Author : Sebastian De La Roche
 * method : crear
 * return : Integer 
 * access : public
 */

TipoServicio.prototype.crear = function() {

	var oConexion = new BD();

	var sSQL = "INSERT INTO tiposervicio (nombre, descripcion, idfactura) VALUES (?,?,?);";
	var aParams = [this.sNombre, this.sDescripcion, this.iIdfactura];
	oConexion.beginTransaction();
	return oConexion.insert(sSQL,aParams)
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
 * method : editar
 * return : void 
 * access : public
 */

TipoServicio.prototype.editar = function () {

	var oConexion = new BD();

	var sSQL = "UPDATE tiposervicio SET nombre = ?, descripcion = ?, idfactura = ? WHERE id = ?;";
	var aParams = [this.sNombre, this.sDescripcion, this.iIdfactura, this.iId];

	oConexion.beginTransaction();
	return oConexion.insert(sSQL,aParams)
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

TipoServicio.prototype.eliminar = function () {

	var oConexion = new BD();

	var sSQL = "DELETE FROM tiposervicio WHERE id = ?;";
	var aParams = [this.iId];

	oConexion.beginTransaction();
	return oConexion.insert(sSQL,aParams)
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

TipoServicio.prototype.listar = function () {
	
	var oConexion = new BD();

	var sSQL = "SELECT id, nombre, descripcion FROM tiposervicio;";

	return oConexion.queryAll(sSQL);

}


module.exports = TipoServicio;