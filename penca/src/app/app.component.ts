import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrediccionRegistroComponent } from './prediccion-registro/prediccion-registro.component';
import { SalaGeneralComponent } from './sala-general/sala-general.component';
import { OpcionesAdminComponent } from './opciones-admin/opciones-admin.component';
import { ActualizacionTorneoComponent } from './actualizacion-torneo/actualizacion-torneo.component';
import { CreacionTorneoComponent } from './creacion-torneo/creacion-torneo.component';
import { AgregarEquipoComponent } from './agregar-equipo/agregar-equipo.component';
import { IngresarPartidoComponent } from './ingresar-partido/ingresar-partido.component';
import { ActualizarResultadoComponent } from './actualizar-resultado/actualizar-resultado.component';
import { TorneoCreadoComponent } from './torneo-creado/torneo-creado.component';
import { appRoutes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppComponent, RouterOutlet, LoginComponent, PrediccionRegistroComponent, SalaGeneralComponent, OpcionesAdminComponent, ActualizacionTorneoComponent, CreacionTorneoComponent, AgregarEquipoComponent, IngresarPartidoComponent, ActualizarResultadoComponent, TorneoCreadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'penca';
}
