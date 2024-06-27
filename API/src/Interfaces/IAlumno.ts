import { ICarrera } from "./ICarrera"

interface IAlumno {
  nombre: string
  apellido: string
  fecha_nac: Date
  ci: string
  carrera: ICarrera
  password: string
}
export default IAlumno