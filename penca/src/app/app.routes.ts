import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrediccionRegistroComponent } from './prediccion-registro/prediccion-registro.component';
import { SalaGeneralComponent } from './sala-general/sala-general.component';
import { OpcionesAdminComponent } from './opciones-admin/opciones-admin.component';
import { CreacionTorneoComponent } from './creacion-torneo/creacion-torneo.component';
import { CreacionPartidoComponent } from './creacion-partido/creacion-partido.component';
import { ActualizacionTorneoComponent } from './actualizacion-torneo/actualizacion-torneo.component';
import { ActualizarResultadoComponent } from './actualizar-resultado/actualizar-resultado.component';
import { IngresarPartidoComponent } from './ingresar-partido/ingresar-partido.component';
import { AgregarEquipoComponent } from './agregar-equipo/agregar-equipo.component';
import { TorneoCreadoComponent } from './torneo-creado/torneo-creado.component';
import { PartidoCreadoComponent } from './partido-creado/partido-creado.component';
import { ActualizacionResultadoComponent } from './actualizacion-resultado/actualizacion-resultado.component';
import { ActualizacionUnResultadoComponent } from './actualizacion-un-resultado/actualizacion-un-resultado.component';
import { ResultadoActualizadoComponent } from './resultado-actualizado/resultado-actualizado.component';
import { PrediccionActualizadaComponent } from './prediccion-actualizada/prediccion-actualizada.component';
import { PredecirResultadoComponent } from './predecir-resultado/predecir-resultado.component';
import { SeleccionarTorneoComponent } from './seleccionar-torneo/seleccionar-torneo.component';

export const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'prediccion-registro', component: PrediccionRegistroComponent },
  { path: 'sala-general', component: SalaGeneralComponent },
  { path: 'opciones-admin', component: OpcionesAdminComponent },
  { path: 'creacion-torneo', component: CreacionTorneoComponent },
  { path: 'creacion-partido', component: CreacionPartidoComponent },
  { path: 'actualizacion-torneo', component: ActualizacionTorneoComponent},
  { path: 'actualizar-resultado', component: ActualizarResultadoComponent},
  { path: 'ingresar-partido', component: IngresarPartidoComponent},
  { path: 'agregar-equipo', component: AgregarEquipoComponent},
  { path: 'torneo-creado', component: TorneoCreadoComponent},
  { path: 'partido-creado', component: PartidoCreadoComponent},
  { path: 'actualizacion-resultado', component: ActualizacionResultadoComponent},
  { path: 'actualizacion-un-resultado', component: ActualizacionUnResultadoComponent},
  { path: 'resultado-actualizado', component: ResultadoActualizadoComponent},
  { path: 'prediccion-actualizada', component: PrediccionActualizadaComponent},
  { path: 'predecir-resultado', component: PredecirResultadoComponent},
  { path: 'seleccionar-torneo', component: SeleccionarTorneoComponent}
];