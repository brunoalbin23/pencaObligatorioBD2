import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrediccionRegistroComponent } from './prediccion-registro/prediccion-registro.component';
import { SalaGeneralComponent } from './usuario/sala-general/sala-general.component';
import { OpcionesAdminComponent } from './admin/opciones-admin/opciones-admin.component';
import { ActualizacionTorneoComponent } from './admin/actualizacion-torneo/actualizacion-torneo.component';
import { CreacionTorneoComponent } from './admin/creacion-torneo/creacion-torneo.component';
import { AgregarEquipoComponent } from './admin/agregar-equipo/agregar-equipo.component';
import { IngresarPartidoComponent } from './admin/ingresar-partido/ingresar-partido.component';
import { ActualizarResultadoComponent } from './admin/actualizar-resultado/actualizar-resultado.component';
import { TorneoCreadoComponent } from './admin/torneo-creado/torneo-creado.component';
import { PartidoCreadoComponent } from './admin/partido-creado/partido-creado.component';
import { ActualizacionResultadoComponent } from './admin/actualizacion-resultado/actualizacion-resultado.component';
import { ActualizacionUnResultadoComponent } from './admin/actualizacion-un-resultado/actualizacion-un-resultado.component';
import { ResultadoActualizadoComponent } from './admin/resultado-actualizado/resultado-actualizado.component';
import { PrediccionActualizadaComponent } from './usuario/prediccion-actualizada/prediccion-actualizada.component';
import { PredecirResultadoComponent } from './usuario/predecir-resultado/predecir-resultado.component';
import { SeleccionarTorneoComponent } from './admin/seleccionar-torneo/seleccionar-torneo.component';
import { ElegirTorneoComponent } from './usuario/elegir-torneo/elegir-torneo.component';
import { ActualizacionTorneoFinalComponent } from './actualizacion-torneo-final/actualizacion-torneo-final.component';
import { FinalizadosComponent } from './finalizados/finalizados.component';
import { ProximosComponent } from './proximos/proximos.component';
import { RankingComponent } from './ranking/ranking.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { CrearEquipoComponent } from './crear-equipo/crear-equipo.component';
import { EquipoCreadoComponent } from './equipo-creado/equipo-creado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EquipoCreadoComponent, CrearEquipoComponent, RankingComponent, FinalizadosComponent, ProximosComponent, ActualizacionTorneoFinalComponent, ElegirTorneoComponent, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatFormFieldModule, AppComponent, RouterOutlet, LoginComponent, PrediccionRegistroComponent, SalaGeneralComponent, OpcionesAdminComponent, ActualizacionTorneoComponent, CreacionTorneoComponent, AgregarEquipoComponent, IngresarPartidoComponent, ActualizarResultadoComponent, TorneoCreadoComponent, CommonModule, PartidoCreadoComponent, ActualizacionResultadoComponent, ActualizacionUnResultadoComponent, ResultadoActualizadoComponent, PrediccionActualizadaComponent, PredecirResultadoComponent, SeleccionarTorneoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'penca';
}