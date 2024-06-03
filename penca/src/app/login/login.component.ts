import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  setBanderaLogin() {
    this.bandera = !this.bandera;
  }

  setBanderaRegistro() {
    this.bandera2 = !this.bandera2;
  }

  ingresarAdmin() {
    this.bandera = !this.bandera;
  }
}
