import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule]
})

export class LoginComponent {
  bandera: boolean = false;
  bandera2: boolean = false;

  constructor(private router: Router) { }

  navigateToPrediccionRegistro() {
    this.router.navigate(['/prediccion-registro']);
  }

  navigateToSala() {
    this.router.navigate(['/sala-general']);
  }

  setBanderaLogin() {
    this.bandera = !this.bandera;
  }

  setBanderaRegistro() {
    this.bandera2 = !this.bandera2;
  }

  ingresarAdmin() {
    this.bandera = !this.bandera;
  }

  closeForm() {
    this.bandera = !this.bandera;
  }

  closeForm2() {
    this.bandera2 = !this.bandera2;
  }
}
