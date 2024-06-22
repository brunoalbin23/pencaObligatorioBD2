import { carrera } from "./ICarrera"

interface IAlumno {
  nombre: string
  apellido: string
  fecha_nac: Date
  ci: string
  carrera: carrera
  password: string
}
export default IAlumno