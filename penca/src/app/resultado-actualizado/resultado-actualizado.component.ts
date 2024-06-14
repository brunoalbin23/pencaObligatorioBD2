import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado-actualizado',
  standalone: true,
  imports: [],
  templateUrl: './resultado-actualizado.component.html',
  styleUrl: './resultado-actualizado.component.css'
})
export class ResultadoActualizadoComponent {

  constructor(private router: Router) { }

  navigateToActualizacionResultado() {
    this.router.navigate(['/actualizacion-resultado']);
  }
}