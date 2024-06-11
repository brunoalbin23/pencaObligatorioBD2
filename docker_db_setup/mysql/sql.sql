USE Obligatorio;

CREATE TABLE Usuario (id VARCHAR(30) NOT NULL,
contrasenia VARCHAR(30),
PRIMARY KEY (id)
);

CREATE TABLE Admin (id VARCHAR(30) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (id) REFERENCES Usuario(id)
);

CREATE TABLE Alumno (id VARCHAR(30) NOT NULL,
nombre VARCHAR(30) NOT NULL,
apellido VARCHAR(30) NOT NULL,
fecha_nac DATE NOT NULL,
cedula INT NOT NULL UNIQUE,
PRIMARY KEY (id),
FOREIGN KEY (id) REFERENCES Usuario(id)
);

CREATE TABLE Carrera (id VARCHAR(30) NOT NULL,
nombre VARCHAR(50) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE Alumno_Carrera (id_carrera VARCHAR(30) NOT NULL,
id_alumno VARCHAR(30) NOT NULL,
fecha_inicio DATE NOT NULL,
fecha_fin DATE,
PRIMARY KEY (id_carrera, id_alumno),
FOREIGN KEY (id_carrera) REFERENCES Carrera(id),
FOREIGN KEY (id_alumno) REFERENCES Alumno(id)
);

CREATE TABLE Equipo (nombre VARCHAR(30) NOT NULL,
PRIMARY KEY (nombre)
);


CREATE TABLE Evento (nombre VARCHAR(50) NOT NULL,
anio SMALLINT NOT NULL,
fecha_inicio DATE NOT NULL,
fecha_fin DATE,
PRIMARY KEY (nombre, anio)
);

CREATE TABLE Partido (nombre_eq1 VARCHAR(30) NOT NULL,
nombre_eq2 VARCHAR(30) NOT NULL,
fecha_hora DATETIME NOT NULL,
goles_eq1 TINYINT,
goles_eq2 TINYINT,
nombre_ev VARCHAR(50) NOT NULL,
anio_ev SMALLINT NOT NULL,
PRIMARY KEY (nombre_eq1, nombre_eq2, fecha_hora),
FOREIGN KEY (nombre_eq1) REFERENCES Equipo(nombre),
FOREIGN KEY (nombre_eq2) REFERENCES Equipo(nombre),
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

CREATE TABLE Prediccion_Evento_Equipo (id_alumno VARCHAR(30) NOT NULL,
nombre_ev VARCHAR(50) NOT NULL,
anio_ev SMALLINT NOT NULL,
nombre_eq VARCHAR(30) NOT NULL,
prediccion TINYINT,
PRIMARY KEY (id_alumno, nombre_ev, anio_ev, nombre_eq),
CONSTRAINT UC1 UNIQUE (nombre_ev, anio_ev, prediccion),
FOREIGN KEY (id_alumno) REFERENCES Alumno(id),
FOREIGN KEY (nombre_ev, anio_ev, nombre_eq) REFERENCES Evento_Equipo(nombre_ev, anio_ev, nombre_eq)
);


CREATE TABLE Prediccion_Partido (id_alumno VARCHAR(30) NOT NULL,
nombre_eq1 VARCHAR(30) NOT NULL,
nombre_eq2 VARCHAR(30) NOT NULL,
fecha_hora_partido DATETIME NOT NULL,
fecha_hora_prediccion DATETIME,
prediccion_eq1 TINYINT,
prediccion_eq2 TINYINT,
puntaje TINYINT,
PRIMARY KEY (id_alumno, nombre_eq1, nombre_eq2, fecha_hora_partido),
FOREIGN KEY (id_alumno) REFERENCES Alumno(id),
FOREIGN KEY (nombre_eq1, nombre_eq2, fecha_hora_partido) REFERENCES Partido(nombre_eq1, nombre_eq2, fecha_hora)
);
