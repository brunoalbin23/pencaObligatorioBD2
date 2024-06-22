import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seleccionar-torneo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './seleccionar-torneo.component.html',
  styleUrl: './seleccionar-torneo.component.css'
})
export class SeleccionarTorneoComponent {
  bandera: boolean = false;
  currentInputId: string | null = null;

  constructor(private router: Router) { }

  navigateToSala() {
    this.router.navigate(['/actualizacion-torneo']);
  }

  openModal(inputId: string) {
    this.currentInputId = inputId;
    this.bandera = true;
  }

  closeForm() {
    this.bandera = false;
  }

  //Esto por ahora esta con numeros, la idea es q despues sean nombres de paises o cuadros extraidos de la base de datos del torneo
  selectedNumber: number | null = null;
  numbers: number[] = Array.from({ length: 10 }, (_, i) => i + 1);

  selectNumber(num: number) {
    this.selectedNumber = num;
  }

  saveSelectedNumber() {
    if (this.selectedNumber !== null && this.currentInputId !== null) {
      const inputElement = document.getElementById(this.currentInputId) as HTMLInputElement;
      if (inputElement) {
        inputElement.value = this.selectedNumber.toString();
      }
      this.closeForm();
    }
  }
}
