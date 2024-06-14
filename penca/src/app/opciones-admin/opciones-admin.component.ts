import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opciones-admin',
  standalone: true,
  imports: [],
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
}
