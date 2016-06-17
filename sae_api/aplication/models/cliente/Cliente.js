/**
 * 	MODELO cliente
 * 	
 *  Author : Sebastian De La Roche
 *  Descripcion : modelo encargado de manejar toda la parte transaccional de cliente
 */

var BD = require("../configModels.js"); 


function Cliente() 
{
	// CONECTION BD

	/**
	 * name : oConexion
	 * type : Objet
	 * access : private
	 */

	this.oConexion = new BD();


	// ATRIBUTOS DEL MODELO
	
	/**
	 * name : iId
	 * type : integer
	 * access : private
	 */
	this.iId 			= null;

	/**
	 * name : sNit
	 * type : string
	 * access : private
	 */
	this.sNit 			= null;

	/**
	 * name : sNombre
	 * type : String
	 * access : private
	 */
	this.sNombre 		= null;
	
	/**
	 * name : sEmail
	 * type : String
	 * access : private
	 */
	this.sEmail 		= null;

	/**
	 * name : sTelefono
	 * type : String
	 * access : private
	 */
	this.sTelefono 		= null;

	/**
	 * name : sMovil
	 * type : String
	 * access : private
	 */
	this.sMovil 		= null;

	/**
	 * name : iIdTipoCliente
	 * type : integer
	 * access : private
	 */
	this.iIdTipoCliente 		= null;

	/**
	 * name : sNombreUrbanizacion
	 * type : string
	 * access : private
	 */
	this.sNombreUrbanizacion = null;

	/**
	 * name : sDireccion
	 * type : string
	 * access : private
	 */
	this.sDireccion 		= null;

	/**
	 * name : sZona
	 * type : string
	 * access : private
	 */
	this.sZona 		= null;


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
	 * method : setNit
	 * return : void
	 * access : public
	 */
	this.setNit = function(sNit){
		this.sNit = sNit;
	}

	/**
	 * method : getNit
	 * return : string
	 * access : public
	 */
	this.getNit = function(){
		return this.sNit;
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
	 * method : setEmail
	 * return : void
	 * access : public
	 */
	this.setEmail = function(sEmail){
		this.sEmail = sEmail;
	}

	/**
	 * method : getEmail
	 * return : string
	 * access : public
	 */
	this.getEmail = function(){
		return this.sEmail;
	}

	/**
	 * method : setTelefono
	 * return : void
	 * access : public
	 */
	this.setTelefono = function(sTelefono){
		this.sTelefono = sTelefono;
	}

	/**
	 * method : getTelefono
	 * return : string
	 * access : public
	 */
	this.getTelefono = function(){
		return this.sTelefono;
	}

	/**
	 * method : setMovil
	 * return : void
	 * access : public
	 */
	this.setMovil = function(sMovil){
		this.sMovil = sMovil;
	}

	/**
	 * method : getMovil
	 * return : string
	 * access : public
	 */
	this.getMovil = function(){
		return this.sMovil;
	}
	
	/**
	 * method : setIdTipoCliente
	 * return : void
	 * access : public
	 */
	this.setIdTipoCliente = function(iIdTipoCliente){
		this.iIdTipoCliente = iIdTipoCliente;
	}

	/**
	 * method : getIdTipoCliente
	 * return : integer
	 * access : public
	 */
	this.getIdTipoCliente = function(){
		return this.iIdTipoCliente;
	}

	
	/**
	 * method : setNombreUrbanizacion
	 * return : void
	 * access : public
	 */
	this.setNombreUrbanizacion = function(sNombreUrbanizacion){
		this.sNombreUrbanizacion = sNombreUrbanizacion;
	}

	/**
	 * method : getNombreUrbanizacion
	 * return : string
	 * access : public
	 */
	this.getNombreUrbanizacion = function(){
		return this.sNombreUrbanizacion;
	}

	/**
	 * method : setDireccion
	 * return : void
	 * access : public
	 */
	this.setDireccion = function(sDireccion){
		this.sDireccion = sDireccion;
	}

	/**
	 * method : getDireccion
	 * return : string
	 * access : public
	 */
	this.getDireccion = function(){
		return this.sDireccion;
	}

	/**
	 * method : setZona
	 * return : void
	 * access : public
	 */
	this.setZona = function(sZona){
		this.sZona = sZona;
	}

	/**
	 * method : getZona
	 * return : string
	 * access : public
	 */
	this.getZona = function(){
		return this.sZona;
	}


}

/**
 * Author : Sebastian De La Roche
 * method : load
 * return : Objeto (data con info. del cliente)
 * access : public
 */

Cliente.prototype.load = function () {

	var oConexion = new BD();

	var sSQL = "SELECT id, nit, nombre, email, telefono, movil, idtipocliente, nombreurbanizacion, direccion, zona FROM cliente WHERE id = ?;";
	var aParams = [this.iId];

	return oConexion.queryRow(sSQL,aParams);

}

/**
 * Author : Sebastian De La Roche
 * method : crear
 * return : Integer 
 * access : public
 */

Cliente.prototype.crear = function() {

	var oConexion = this.oConexion;

	var sSQLCliente = "INSERT INTO cliente (nit,nombre, email, telefono, movil, idtipocliente, nombreurbanizacion, direccion, zona) VALUES (?,?,?,?,?,?,?,?,?);";
	var aParamsCliente = [this.sNit ,this.sNombre ,this.sEmail ,this.sTelefono ,this.sMovil ,this.iIdTipoCliente, this.sNombreUrbanizacion, this.sDireccion, this.sZona];

	oConexion.beginTransaction();

	return oConexion.insert(sSQLCliente,aParamsCliente)
		   .then(function (iIdCliente) {
				oConexion.commitTransaction();
		   		return iIdCliente;
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

Cliente.prototype.editar = function () {

	var oConexion = new BD();

	var sSQL = "UPDATE cliente SET nit = ?, nombre = ?, email = ?, telefono = ?, movil = ?, idtipocliente = ?, nombreurbanizacion = ?, direccion = ?, zona = ? WHERE id = ?;";
	var aParams = [this.sNit ,this.sNombre ,this.sEmail ,this.sTelefono ,this.sMovil ,this.iIdTipoCliente,this.sNombreUrbanizacion, this.sDireccion, this.sZona, this.iId];

	return oConexion.query(sSQL,aParams);

}

/**
 * Author : Sebastian De La Roche
 * method : eliminar
 * return : void 
 * access : public
 */

Cliente.prototype.eliminar = function () {

	var oConexion = new BD();

	var sSQL = "DELETE FROM cliente WHERE id = ?;";
	var aParams = [this.iId];

	return oConexion.query(sSQL,aParams);

}

/**
 * Author : Sebastian De La Roche
 * method : listar
 * return : Array 
 * access : public
 */

Cliente.prototype.listar = function () {
	
	var oConexion = new BD();

	var sSQL = "SELECT id, nit, nombre, email, telefono, movil, idtipocliente FROM cliente;";

	return oConexion.queryAll(sSQL);

}


module.exports = Cliente;