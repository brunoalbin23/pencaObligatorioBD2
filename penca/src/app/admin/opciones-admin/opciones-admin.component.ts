import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-opciones-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './opciones-admin.component.html',
  styleUrl: './opciones-admin.component.css'
})
export class OpcionesAdminComponent {

  bandera: boolean = false;
  
  openModal(inputId: string) {
    this.bandera = true;
  }

  constructor(private router: Router) { }

  navigateToCrearTorneo() {
    this.router.navigate(['/creacion-torneo']);
  }

  navigateToSeleccionarTorneo() {
    this.router.navigate(['/seleccionar-torneo']);
  }

  navigateToCrearEquipo() {
    this.router.navigate(['/crear-equipo']);
  }

  navigateToSalir() {
    this.router.navigate(['/']);
  }
}
