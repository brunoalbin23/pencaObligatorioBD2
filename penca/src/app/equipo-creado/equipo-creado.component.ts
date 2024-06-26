import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-equipo-creado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './equipo-creado.component.html',
  styleUrl: './equipo-creado.component.css'
})
export class EquipoCreadoComponent {

  constructor(private router: Router) { }

  navigateToActualizacionResultado() {
    this.router.navigate(['/crear-equipo']);
  }

}
