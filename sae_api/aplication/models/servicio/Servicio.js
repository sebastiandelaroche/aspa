/**
 * 	MODELO servicio
 * 	
 *  Author : Sebastian De La Roche
 *  Descripcion : modelo encargado de manejar toda la parte transaccional de servicio
 */

var BD = require("../configModels.js");


function Servicio() 
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
	 * name : dValorSevicio
	 * type : float
	 * access : private
	 */
	this.dValorSevicio 	= null;

	/**
	 * name : iIdtipoServicio
	 * type : integer
	 * access : private
	 */
	this.iIdTipoServicio 	= null;


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
	 * method : setValorSevicio
	 * return : void
	 * access : public
	 */
	this.setValorSevicio = function(dValorSevicio){
		this.dValorSevicio = dValorSevicio;
	}

	/**
	 * method : getValorSevicio
	 * return : Float
	 * access : public
	 */
	this.getValorSevicio = function(){
		return this.dValorSevicio;
	}

	/**
	 * method : setTipoServicio
	 * return : void
	 * access : public
	 */
	this.setIdTipoServicio = function(iIdTipoServicio){
		this.iIdTipoServicio = iIdTipoServicio;
	}

	/**
	 * method : getTipoServicio
	 * return : Float
	 * access : public
	 */
	this.getIdTipoServicio = function(){
		return this.iIdTipoServicio;
	}

}

/**
 * Author : Sebastian De La Roche
 * method : load
 * return : Objeto (data con info. servicio)
 * access : public
 */

Servicio.prototype.load = function () {

	var oConexion = new BD();

	var sSQL = "SELECT id, nombre, descripcion, valorservicio, idtiposervicio FROM servicio WHERE id = ?;";
	var aParams = [this.iId];

	return oConexion.queryRow(sSQL,aParams);

}

/**
 * Author : Sebastian De La Roche
 * method : crear
 * return : Integer 
 * access : public
 */

Servicio.prototype.crear = function() {

	var oConexion = new BD();

	var sSQL = "INSERT INTO servicio (nombre, descripcion, valorservicio, idtiposervicio) VALUES (?,?,?,?);";
	var aParams = [this.sNombre, this.sDescripcion, this.dValorSevicio, this.iIdTipoServicio];
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

Servicio.prototype.editar = function () {

	var oConexion = new BD();

	var sSQL = "UPDATE servicio SET nombre = ?, descripcion = ?, valorservicio = ?, idtiposervicio = ? WHERE id = ?;";
	var aParams = [this.sNombre, this.sDescripcion, this.dValorSevicio, this.iIdTipoServicio, this.iId];

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

Servicio.prototype.eliminar = function () {

	var oConexion = new BD();

	var sSQL = "DELETE FROM servicio WHERE id = ?;";
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

Servicio.prototype.listar = function () {
	
	var oConexion = new BD();

	var sSQL = "SELECT id, nombre, descripcion, valorservicio, idtiposervicio FROM servicio;";

	return oConexion.queryAll(sSQL);

}


module.exports = Servicio;