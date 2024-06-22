import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actualizacion-torneo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './actualizacion-torneo.component.html',
  styleUrl: './actualizacion-torneo.component.css'
})
export class ActualizacionTorneoComponent {

  constructor(private router: Router) { }

  navigateToAgregarEquipo() {
    this.router.navigate(['/agregar-equipo']);
  }

  navigateToIngresarPartido() {
    this.router.navigate(['/ingresar-partido']);
  }

  navigateToActualizarResultado() {
    this.router.navigate(['/actualizacion-resultado']);
  }

  navigateToSalir() {
    this.router.navigate(['/opciones-admin']);
  }
}
