SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `sae` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `sae` ;

-- -----------------------------------------------------
-- Table `sae`.`tipocliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sae`.`tipocliente` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` TEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sae`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sae`.`cliente` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nit` VARCHAR(50) NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NULL,
  `telefono` VARCHAR(10) NULL,
  `movil` VARCHAR(15) NULL,
  `idtipocliente` INT NOT NULL,
  `nombreurbanizacion` VARCHAR(45) NOT NULL,
  `direccion` VARCHAR(45) NOT NULL,
  `zona` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cliente_1_idx` (`idtipocliente` ASC),
  CONSTRAINT `fk_cliente_idtipocliente`
    FOREIGN KEY (`idtipocliente`)
    REFERENCES `sae`.`tipocliente` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sae`.`trabajadorescliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sae`.`trabajadorescliente` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `documento` INT NULL,
  `telefono` VARCHAR(10) NULL,
  `movil` VARCHAR(15) NULL,
  `idcliente` INT NOT NULL,
  `cargo` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_trabajadorescliente_idcliente_idx` (`idcliente` ASC),
  CONSTRAINT `fk_trabajadorescliente_idcliente`
    FOREIGN KEY (`idcliente`)
    REFERENCES `sae`.`cliente` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sae`.`tipoproducto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sae`.`tipoproducto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `descripcion` TEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sae`.`tiposervicio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sae`.`tiposervicio` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `descripcion` TEXT NULL,
  `idfactura` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sae`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sae`.`producto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NULL,
  `descripcion` TEXT NULL,
  `unidadmedida` INT NULL,
  `idtipoproducto` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_producto_idtipoproducto_idx` (`idtipoproducto` ASC),
  CONSTRAINT `fk_producto_idtipoproducto`
    FOREIGN KEY (`idtipoproducto`)
    REFERENCES `sae`.`tipoproducto` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sae`.`servicio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sae`.`servicio` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NULL,
  `valorservicio` FLOAT NULL,
  `idtiposervicio` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_servicio_idtiposervicio_idx` (`idtiposervicio` ASC),
  CONSTRAINT `fk_servicio_idtiposervicio`
    FOREIGN KEY (`idtiposervicio`)
    REFERENCES `sae`.`tiposervicio` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sae`.`modulo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sae`.`modulo` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `nombreruta` VARCHAR(45) NOT NULL,
  `descrpcion` TEXT NULL,
  `activo` TINYINT(1) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sae`.`controlador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sae`.`controlador` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `nombreruta` VARCHAR(45) NOT NULL,
  `descripcion` TEXT NULL,
  `idmodulo` INT NOT NULL,
  `activo` TINYINT(1) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_controlador_idmodulo_idx` (`idmodulo` ASC),
  CONSTRAINT `fk_controlador_idmodulo`
    FOREIGN KEY (`idmodulo`)
    REFERENCES `sae`.`modulo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sae`.`accion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sae`.`accion` (
  `id` INT NOT NULL,
  `nombre` CHAR(1) NOT NULL,
  `nombreruta` VARCHAR(45) NOT NULL,
  `descripcion` TEXT NULL,
  `idcontrolador` INT NOT NULL,
  `activo` TINYINT(1) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_accion_idcontrolador_idx` (`idcontrolador` ASC),
  CONSTRAINT `fk_accion_idcontrolador`
    FOREIGN KEY (`idcontrolador`)
    REFERENCES `sae`.`controlador` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sae`.`perfil`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sae`.`perfil` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `descripcion` TEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sae`.`cuentausuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sae`.`cuentausuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombres` VARCHAR(50) NULL,
  `apellidos` VARCHAR(50) NULL,
  `usuario` VARCHAR(50) NOT NULL,
  `contrasena` VARCHAR(100) NOT NULL,
  `identificacion` VARCHAR(20) NULL,
  `email` VARCHAR(100) NULL,
  `telefono` VARCHAR(10) NULL,
  `movil` VARCHAR(15) NULL,
  `idperfil` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `usuario_UNIQUE` (`usuario` ASC),
  INDEX `fk_cuentausuario_idperfil_idx` (`idperfil` ASC),
  CONSTRAINT `fk_cuentausuario_idperfil`
    FOREIGN KEY (`idperfil`)
    REFERENCES `sae`.`perfil` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sae`.`perfilpermisos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sae`.`perfilpermisos` (
  `idperfil` INT NOT NULL,
  `idmodulo` INT NOT NULL,
  `idcontrolador` INT NOT NULL,
  `idaccion` INT NOT NULL,
  UNIQUE INDEX `idperfil_UNIQUE` (`idperfil` ASC),
  UNIQUE INDEX `idmodulo_UNIQUE` (`idmodulo` ASC),
  UNIQUE INDEX `idcontrolador_UNIQUE` (`idcontrolador` ASC),
  UNIQUE INDEX `idaccion_UNIQUE` (`idaccion` ASC),
  CONSTRAINT `fk_perfilpermisos_idperfil`
    FOREIGN KEY (`idperfil`)
    REFERENCES `sae`.`perfil` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sae`.`entradas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sae`.`entradas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `descripcion` TEXT NULL,
  `codigocompra` VARCHAR(20) NOT NULL,
  `cantidadunidades` INT NOT NULL,
  `valorunidad` DOUBLE NOT NULL,
  `valortotal` DOUBLE NOT NULL,
  `idproducto` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `codigocompra_UNIQUE` (`codigocompra` ASC),
  INDEX `fk_entradas_idproducto_idx` (`idproducto` ASC),
  CONSTRAINT `fk_entradas_idproducto`
    FOREIGN KEY (`idproducto`)
    REFERENCES `sae`.`producto` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sae`.`salidas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sae`.`salidas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `descripcion` TEXT NULL,
  `codigoventa` VARCHAR(20) NOT NULL,
  `cantidadunidades` INT NOT NULL,
  `valorunidad` DOUBLE NOT NULL,
  `valortotal` DOUBLE NOT NULL,
  `idproducto` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `codigoventa_UNIQUE` (`codigoventa` ASC),
  INDEX `fk_salidas_idproducto_idx` (`idproducto` ASC),
  CONSTRAINT `fk_salidas_idproducto`
    FOREIGN KEY (`idproducto`)
    REFERENCES `sae`.`producto` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sae`.`existencias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sae`.`existencias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `cantidadunidades` INT NOT NULL COMMENT ' ',
  `valorunidad` DOUBLE NOT NULL,
  `valortotal` DOUBLE NOT NULL,
  `idproducto` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_existencias_idproducto_idx` (`idproducto` ASC),
  CONSTRAINT `fk_existencias_idproducto`
    FOREIGN KEY (`idproducto`)
    REFERENCES `sae`.`producto` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sae`.`estadopedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sae`.`estadopedido` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(50) NOT NULL,
  `descripcion` TEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sae`.`pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sae`.`pedido` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `idcliente` INT NOT NULL,
  `idestadopedido` INT NOT NULL,
  `fechapedido` DATE NOT NULL,
  `fechaentrega` DATE NOT NULL,
  `fechalimitepago` DATE NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_pedido_idestadopedido_idx` (`idestadopedido` ASC),
  INDEX `fk_pedido_idcliente_idx` (`idcliente` ASC),
  CONSTRAINT `fk_pedido_idestadopedido`
    FOREIGN KEY (`idestadopedido`)
    REFERENCES `sae`.`estadopedido` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_idcliente`
    FOREIGN KEY (`idcliente`)
    REFERENCES `sae`.`cliente` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sae`.`productospedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sae`.`productospedido` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `idpedido` INT NOT NULL,
  `fechapedido` DATE NOT NULL,
  `cantidadunidades` INT NOT NULL,
  `valorunidad` DOUBLE NOT NULL,
  `valortotal` DOUBLE NOT NULL,
  `idproduto` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_productospedido_idpedido_idx` (`idpedido` ASC),
  INDEX `fk_productospedido_idproduto_idx` (`idproduto` ASC),
  CONSTRAINT `fk_productospedido_idpedido`
    FOREIGN KEY (`idpedido`)
    REFERENCES `sae`.`pedido` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productospedido_idproduto`
    FOREIGN KEY (`idproduto`)
    REFERENCES `sae`.`producto` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sae`.`serviciospedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sae`.`serviciospedido` (
  `id` INT NOT NULL,
  `idpedido` INT NOT NULL,
  `fecha` DATE NOT NULL,
  `valorservicio` DOUBLE NOT NULL,
  `idservicio` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_serviciospedido_idpedido_idx` (`idpedido` ASC),
  INDEX `fk_serviciospedido_idservicio_idx` (`idservicio` ASC),
  CONSTRAINT `fk_serviciospedido_idpedido`
    FOREIGN KEY (`idpedido`)
    REFERENCES `sae`.`pedido` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_serviciospedido_idservicio`
    FOREIGN KEY (`idservicio`)
    REFERENCES `sae`.`servicio` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;