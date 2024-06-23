CREATE TABLE Usuario (id VARCHAR(30) NOT NULL,
contrasenia VARCHAR(30),
PRIMARY KEY (id)
);


CREATE TABLE Admin (id VARCHAR(30) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (id) REFERENCES Usuario(id)
);


CREATE TABLE Alumno (CI VARCHAR(30) NOT NULL,
nombre VARCHAR(30) NOT NULL,
apellido VARCHAR(30) NOT NULL,
fecha_nac DATE NOT NULL,
PRIMARY KEY (CI),
FOREIGN KEY (CI) REFERENCES Usuario(id)
);


CREATE TABLE Carrera (id VARCHAR(30) NOT NULL,
nombre VARCHAR(50) NOT NULL,
PRIMARY KEY (id)
);


CREATE TABLE Alumno_Carrera (id_carrera VARCHAR(30) NOT NULL,
CI VARCHAR(30) NOT NULL,
fecha_ini DATE NOT NULL,
fecha_ult_act DATE,
PRIMARY KEY (fecha_ini, CI),
FOREIGN KEY (id_carrera) REFERENCES Carrera(id),
FOREIGN KEY (CI) REFERENCES Alumno(CI)
);


CREATE TABLE Equipo (nombre VARCHAR(30) NOT NULL,
PRIMARY KEY (nombre)
);




CREATE TABLE Evento (nombre VARCHAR(50) NOT NULL,
anio SMALLINT NOT NULL,
PRIMARY KEY (nombre, anio)
);


CREATE TABLE Estadio (id VARCHAR(30) NOT NULL,
nombre VARCHAR(50) NOT NULL,
PRIMARY KEY(id)
);


CREATE TABLE Tipo_Partido (id VARCHAR(30) NOT NULL,
nombre VARCHAR(50) NOT NULL,
PRIMARY KEY(id)
);


CREATE TABLE Partido (nombre_eq1 VARCHAR(30) NOT NULL,
nombre_eq2 VARCHAR(30) NOT NULL,
fecha_hora DATETIME NOT NULL,
goles_eq1 TINYINT,
goles_eq2 TINYINT,
nombre_ev VARCHAR(50) NOT NULL,
anio_ev SMALLINT NOT NULL,
id_estadio VARCHAR(30) NOT NULL,
id_tipo VARCHAR(30) NOT NULL,
PRIMARY KEY (nombre_eq1, nombre_eq2, fecha_hora),
FOREIGN KEY (nombre_eq1) REFERENCES Equipo(nombre),
FOREIGN KEY (nombre_eq2) REFERENCES Equipo(nombre),
FOREIGN KEY (id_estadio) REFERENCES Estadio(id),
FOREIGN KEY (id_tipo) REFERENCES Tipo_Partido(id),
FOREIGN KEY (nombre_ev, anio_ev) REFERENCES Evento(nombre, anio)
);



CREATE TABLE Evento_Equipo (nombre_ev VARCHAR(50) NOT NULL,
anio_ev SMALLINT NOT NULL,
nombre_eq VARCHAR(30) NOT NULL,
posicion TINYINT,
PRIMARY KEY (nombre_ev, anio_ev, nombre_eq),
FOREIGN KEY (nombre_ev, anio_ev) REFERENCES Evento(nombre, anio),
FOREIGN KEY (nombre_eq) REFERENCES Equipo(nombre)
);


CREATE TABLE Prediccion_Evento_Equipo (CI VARCHAR(30) NOT NULL,
fecha_ini_car DATE NOT NULL,
nombre_ev VARCHAR(50) NOT NULL,
anio_ev SMALLINT NOT NULL,
nombre_eq VARCHAR(30) NOT NULL,
prediccion TINYINT NOT NULL,
puntaje TINYINT,
PRIMARY KEY (CI, nombre_ev, anio_ev, nombre_eq),
CONSTRAINT UC1 UNIQUE (nombre_ev, anio_ev, prediccion),
FOREIGN KEY (fecha_ini_car, CI) REFERENCES Alumno_Carrera(fecha_ini, CI),
FOREIGN KEY (nombre_ev, anio_ev, nombre_eq) REFERENCES Evento_Equipo(nombre_ev, anio_ev, nombre_eq)
);


CREATE TABLE Prediccion_Partido (CI VARCHAR(30) NOT NULL,
fecha_ini_car DATE NOT NULL,
nombre_eq1 VARCHAR(30) NOT NULL,
nombre_eq2 VARCHAR(30) NOT NULL,
fecha_hora_partido DATETIME NOT NULL,
fecha_hora_prediccion DATETIME,
prediccion_eq1 TINYINT,
prediccion_eq2 TINYINT,
puntaje TINYINT,
PRIMARY KEY (CI, nombre_eq1, nombre_eq2, fecha_hora_partido),
FOREIGN KEY (fecha_ini_car, CI) REFERENCES Alumno_Carrera(fecha_ini, CI),
FOREIGN KEY (nombre_eq1, nombre_eq2, fecha_hora_partido) REFERENCES Partido(nombre_eq1, nombre_eq2, fecha_hora)
);