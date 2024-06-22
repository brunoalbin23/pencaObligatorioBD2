import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actualizacion-torneo-final',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './actualizacion-torneo-final.component.html',
  styleUrl: './actualizacion-torneo-final.component.css'
})
export class ActualizacionTorneoFinalComponent {

  constructor(private router: Router) { }

  navigateToOpcionesAdmin() {
    this.router.navigate(['/actualizacion-torneo']);
  }
}
