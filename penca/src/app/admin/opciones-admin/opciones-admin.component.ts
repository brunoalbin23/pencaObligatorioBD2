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

  constructor(private router: Router) { }

  navigateToCrearTorneo() {
    this.router.navigate(['/creacion-torneo']);
  }

  navigateToSeleccionarTorneo() {
    this.router.navigate(['/seleccionar-torneo']);
  }

  navigateToSalir() {
    this.router.navigate(['/']);
  }
}
