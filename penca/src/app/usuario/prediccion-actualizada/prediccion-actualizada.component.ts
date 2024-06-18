import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prediccion-actualizada',
  standalone: true,
  imports: [],
  templateUrl: './prediccion-actualizada.component.html',
  styleUrl: './prediccion-actualizada.component.css'
})
export class PrediccionActualizadaComponent {

  constructor(private router: Router) { }

  navigateToPredecirResultado() {
    this.router.navigate(['/predecir-resultado']);
  }
}