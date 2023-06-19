	CREATE TABLE usuarios(
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL,
	Ministerio varchar(200) not null,
	email VARCHAR(50) NOT NULL UNIQUE,
	password VARCHAR(50) NOT NULL
);

		
select * from usuarios;
drop table miembros;

CREATE TABLE servicios(
	Ministerio VARCHAR(100)NOT NULL,
	fecha DATE NOT NULL,
	id_usuario INT NOT NULL,
	FOREIGN KEY(id_usuario) REFERENCES usuarios(id)
);

select * from servicios;


INSERT INTO usuarios(nombre, ministerio, email, password) VALUES ('Miguel Cid', 'Sonido', 'miguelcidyevenes@gmail.com', '123456');