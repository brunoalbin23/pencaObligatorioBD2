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
  currentInputId: string | null = null;

  constructor(private router: Router) { }

  navigateToSala() {
    this.router.navigate(['/sala-general']);
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
  numbers: number[] = Array.from({ length: 20 }, (_, i) => i + 1);

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
