/**
 * BASES DE DATOS
 * 
 * Author : Sebastian De La Roche
 * Descripción : Modulo encargado de manipular la conección a base de datos 
 * y funciones encargadas de manipular datos e bases de datos
 * 
 */

// Se importa el ORM
var mysql      = require('mysql');
// Se importa objeto que encapsula las funciones para las promesas
var promises = require('promises');

/**
 * Author : Sebastian De La Roche
 * Class : saeBD
 * Descripcion : Constructor inicializador de la conection a la base de datos
 * 
 */

function saeBD(){

    /**
     * Author : Sebastian De La Roche
     * Objet Connection : oConnection
     * Descripcion : Se establece objeto con la coneccion a la base de datos
     * 
     */

    this.oConnection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '123',
        database : 'sae'
    });  


    var connection = this.oConnection;


    /**
     * Author : Sebastian De La Roche
     * Method : beginTransaction
     * Descripcion : Funcion encargada de empezar la transaccion a la base de datos
     * 
     */

    this.beginTransaction = function () {
        // Se inicializa la conección 
        this.oConnection.connect();
        // Se inicia la transaccion
        this.oConnection.beginTransaction();
    }

    /**
     * Author : Sebastian De La Roche
     * Method : commitTransaction
     * Descripcion : Funcion encargada de reflejar los cambios en la base de datos
     * 
     */

    this.commitTransaction = function () {
        // Se ejecuta la transacción
        this.oConnection.commit();
        // Se cierra la conection a la base de datos
        this.oConnection.end();
    }

    /**
     * Author : Sebastian De La Roche
     * Method : rollbackTransaction
     * Descripcion : Funcion encargada de cancelar o restablacer la informacion en la base de datos
     * 
     */

    this.rollbackTransaction = function () {
        // Se cancela la transacción
        this.oConnection.rollback();
        // Se cierra la conection a la base de datos
        this.oConnection.end();
    }


}


/**
 * Author : Sebastian De La Roche
 * Method : query
 * Descripcion : Funcion encargada de ejecutar cualquier consulta tipo DML
 * Params : sQuery String
 * Params : aParams Array
 */

saeBD.prototype.query = function(sQuery, aParams) {
    aParams = aParams || null;
    // Se inicializa la promesa
    var defered = promises.defer();
    // Se ejecuta la query
    this.oConnection
    .query(sQuery, aParams, function (error, result) {
        
        if(!error)
        {
            defered.resolve(result.affectedRows);
        }
        else
        {
            switch(error.errno)
            {
                case 1451: 
                    defered.reject({sError: "No se permite eliminar el registro, porque tiene un historial asociado."});
                break;

                default:
                    defered.reject(error);
                break;
            }
        }


    })
    // Se retona la promesa
    return defered.promise;    
}

/**
 * Author : Sebastian De La Roche
 * Method : queryAll
 * Descripcion : Funcion encargada de ejecutar cualquier consulta tipo DML
 * Params : sQuery String
 * Params : aParams Array
 */

saeBD.prototype.queryRow = function(sQuery, aParams) {
    aParams = aParams || null;
    // Se inicializa la promesa
    var defered = promises.defer();
    // Se ejecuta la query
    this.oConnection
    .query(sQuery, aParams, function (error, result) {    
        error ? defered.reject(error): defered.resolve(result[0]);
    })
    // Se retona la promesa
    return defered.promise;    
}

/**
 * Author : Sebastian De La Roche
 * Method : queryAll
 * Descripcion : Funcion encargada de ejecutar cualquier consulta tipo DML
 * Params : sQuery String
 * Params : aParams Array
 */

saeBD.prototype.queryAll = function(sQuery, aParams) {
    aParams = aParams || null;
    // Se inicializa la promesa
    var defered = promises.defer();
    // Se ejecuta la query
    this.oConnection
    .query(sQuery, aParams, function (error, result) {
        error ? defered.reject(error): defered.resolve(result);
    })
    // Se retona la promesa
    return defered.promise;    
}


/**
 * Author : Sebastian De La Roche
 * Method : insert
 * Descripcion : Funcion encargada de insertar datos en la base de datos
 * Params : sQuery String
 * Params : aParams Array
 */

saeBD.prototype.insert = function(sQuery, aParams) {

    aParams = aParams || null;
    // Se inicializa la promesa
    var defered = promises.defer();
    // Se ejecuta la query
    this.oConnection
    .query(sQuery, aParams, function (error, result) {
        error ? defered.reject(error): defered.resolve(result.insertId);
    })    
    // Se retona la promesa
    return defered.promise;
}



/**
 * Author : Sebastian De La Roche
 * Method : QueryProcedure
 * Descripcion : Funcion encargada ejecutar un procedimiento almacenado
 * Params : sQuery String
 * Params : aParams Array
 */

saeBD.prototype.QueryProcedure = function(sQuery, aParams) {
    
    aParams = aParams || null;
    // Se inicializa la promesa
    var defered = promises.defer();
    // Se ejecuta la query
    this.oConnection
    .query(sQuery, aParams, function (error, result) {

        error ? defered.reject(error): defered.resolve(result[0]);
    })    
    // Se retona la promesa
    return defered.promise;
}




// export connection
module.exports = saeBD;
