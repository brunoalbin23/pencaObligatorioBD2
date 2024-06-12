import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrediccionRegistroComponent } from './prediccion-registro/prediccion-registro.component';
import { SalaGeneralComponent } from './sala-general/sala-general.component';
import { OpcionesAdminComponent } from './opciones-admin/opciones-admin.component';
import { CreacionTorneoComponent } from './creacion-torneo/creacion-torneo.component';
import { ActualizacionTorneoComponent } from './actualizacion-torneo/actualizacion-torneo.component';
import { ActualizarResultadoComponent } from './actualizar-resultado/actualizar-resultado.component';
import { IngresarPartidoComponent } from './ingresar-partido/ingresar-partido.component';
import { AgregarEquipoComponent } from './agregar-equipo/agregar-equipo.component';
import { TorneoCreadoComponent } from './torneo-creado/torneo-creado.component';

export const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'prediccion-registro', component: PrediccionRegistroComponent },
  { path: 'sala-general', component: SalaGeneralComponent },
  { path: 'opciones-admin', component: OpcionesAdminComponent },
  { path: 'creacion-torneo', component: CreacionTorneoComponent },
  { path: 'actualizacion-torneo', component: ActualizacionTorneoComponent},
  { path: 'actualizar-resultado', component: ActualizarResultadoComponent},
  { path: 'ingresar-partido', component: IngresarPartidoComponent},
  { path: 'agregar-equipo', component: AgregarEquipoComponent},
  { path: 'torneo-creado', component: TorneoCreadoComponent}
];