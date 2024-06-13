export interface ICarrera {
    nombre: carrera
    id: string
}

 export enum carrera{
    INGENIERIA = "Ingeniería",
    MEDICINA = "Medicina",
    DERECHO = "Derecho",
    CONTADURIA = "Contaduría",
    ECONOMIA = "Economía" 
}

export const lista_carreras: string[]= ["Ingeniería", "Medicina", "Derecho", "Contaduría", "Economía"];