-- Modulos del sistema
insert into modulo (id, nombre, nombreruta, activo) values (1, 'Cliente', '#',  true);
insert into modulo (id, nombre, nombreruta, activo) values (2, 'Producto', '#', true);
insert into modulo (id, nombre, nombreruta, activo) values (3, 'Servicio', '#', true);

-- Controladores del sistema

insert into controlador (id, nombre, nombreruta, idmodulo, activo) values (1, 'Tipo cliente', '#tipocliente/index', 1, true);
insert into controlador (id, nombre, nombreruta, idmodulo, activo) values (2, 'Cliente', '#cliente/index', 1, true);

insert into controlador (id, nombre, nombreruta, idmodulo, activo) values (3, 'Tipo producto', '#tipoproducto/index', 2, true);
insert into controlador (id, nombre, nombreruta, idmodulo, activo) values (4, 'Producto', '#producto/index', 2, true);

insert into controlador (id, nombre, nombreruta, idmodulo, activo) values (5, 'Tipo servicio', '#tiposervicio/index', 3, true);
insert into controlador (id, nombre, nombreruta, idmodulo, activo) values (6, 'Servicio', '#servicio/index', 3, true);
