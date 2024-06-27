export class IPartido {
    nombre_eq1: string;
    nombre_eq2: string;
    fecha_hora: Date;
    id_tipo: number;
    id_estadio: number;

    constructor(nombre_eq1: string, nombre_eq2: string, fecha_hora: Date, id_tipo: number, id_estadio: number) {
        this.nombre_eq1 = nombre_eq1;
        this.nombre_eq2 = nombre_eq2;
        this.fecha_hora = fecha_hora;
        this.id_tipo = id_tipo;
        this.id_estadio = id_estadio;
    }
}