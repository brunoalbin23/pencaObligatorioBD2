export class IPartidoPasado {
    nombre_eq1: string;
    nombre_eq2: string;
    fecha_hora: Date;
    puntaje: number;

    constructor(nombre_eq1: string, nombre_eq2: string, fecha_hora: Date, puntaje: number) {
        this.nombre_eq1 = nombre_eq1;
        this.nombre_eq2 = nombre_eq2;
        this.fecha_hora = fecha_hora;
        this.puntaje = puntaje;
    }
}