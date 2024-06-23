import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  imports: [FormsModule, CommonModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatFormFieldModule]
})

export class LoginComponent {
  bandera: boolean = false;
  bandera2: boolean = false;
  bandera3: boolean = false;
  bandera4: boolean = false;

  constructor(private router: Router) { }

  navigateToElegirTorneo() {
    this.router.navigate(['/elegir-torneo']);
  }

  navigateToOpcionesAdmin() {
    this.router.navigate(['/opciones-admin']);
  }

  setBanderaLogin() {
    this.bandera = !this.bandera;
  }

  setBanderaLogin2() {
    this.bandera4 = !this.bandera4;
  }

  setBanderaRegistro() {
    this.bandera2 = !this.bandera2;
  }

  setBanderaElegirCarrera() {
    this.bandera3 = !this.bandera3;
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

  closeForm3() {
    this.bandera3 = !this.bandera3;
  }

  closeForm4() {
    this.bandera4 = !this.bandera4;
  }

  currentInputId: string | null = null;

  openModal(inputId: string) {
    this.currentInputId = inputId;
    this.bandera3 = true;
  }


  //Aca van Eventos
  selectedNumber: String | null = null;


  selectNumber(num: String) {
    this.selectedNumber = num;
  }

  saveSelectedNumber() {
    if (this.selectedNumber !== null && this.currentInputId !== null) {
      const inputElement = document.getElementById(this.currentInputId) as HTMLInputElement;
      if (inputElement) {
        inputElement.value = this.selectedNumber.toString();
      }
      this.closeForm3();
    }
  }
}
