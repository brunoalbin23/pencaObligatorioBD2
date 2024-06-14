import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-torneo-creado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './torneo-creado.component.html',
  styleUrl: './torneo-creado.component.css'
})
export class TorneoCreadoComponent {

  constructor(private router: Router) { }

  navigateToOpcionesAdmin() {
    this.router.navigate(['/opciones-admin']);
  }
}
