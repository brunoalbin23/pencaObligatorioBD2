import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatFormFieldModule]
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
