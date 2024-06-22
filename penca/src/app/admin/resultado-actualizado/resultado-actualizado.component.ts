import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resultado-actualizado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './resultado-actualizado.component.html',
  styleUrl: './resultado-actualizado.component.css'
})
export class ResultadoActualizadoComponent {

  constructor(private router: Router) { }

  navigateToActualizacionResultado() {
    this.router.navigate(['/actualizacion-resultado']);
  }
}