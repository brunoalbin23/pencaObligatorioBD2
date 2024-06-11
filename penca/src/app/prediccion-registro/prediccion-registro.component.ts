import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prediccion-registro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prediccion-registro.component.html',
  styleUrl: './prediccion-registro.component.css'
})
export class PrediccionRegistroComponent {
  bandera: boolean = false;

  constructor(private router: Router) { }

  navigateToSala() {
    this.router.navigate(['/sala-general']);
  }

  setBanderaLogin() {
    this.bandera = !this.bandera;
  }

  closeForm() {
    this.bandera = !this.bandera;
  }
}
