import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sala-general',
  standalone: true,
  imports: [],
  templateUrl: './sala-general.component.html',
  styleUrl: './sala-general.component.css'
})
export class SalaGeneralComponent {
  currentView: string = 'proximos';

  proximosPartidos = [
    { equipo1: 'NACIONAL', equipo2: 'PEÑAROL', fecha: 'fecha mas reciente' },
    { equipo1: 'BRASIL', equipo2: 'PORTUGAL', fecha: 'fecha' },
    { equipo1: 'ITALIA', equipo2: 'HOLANDA', fecha: 'fecha mas lejos' }
  ];

  finalizadosPartidos = [
    { equipo1: 'NACIONAL', resultado1: 5, equipo2: 'PEÑAROL', resultado2: 3, fecha: 'fecha mas reciente', puntos: '+0' },
    { equipo1: 'BRASIL', resultado1: 2, equipo2: 'PORTUGAL', resultado2: 1, fecha: 'fecha', puntos: '+5' },
    { equipo1: 'ITALIA', resultado1: 3, equipo2: 'HOLANDA', resultado2: 0, fecha: 'fecha mas lejos', puntos: '+3' }
  ];

  ranking = [
    { nombre: 'Bruno Albín', puntos: 866 },
    { nombre: 'Ignacio Villareal', puntos: 450 },
    { nombre: 'Pedro Albín', puntos: 321 }
  ];

  constructor(private router: Router) { }

  setView(view: string) {
    this.currentView = view;
  }

  volver() {
    this.router.navigate(['/']);
  }
}