import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ingresar-partido',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ingresar-partido.component.html',
  styleUrls: ['./ingresar-partido.component.css']
})
export class IngresarPartidoComponent {
  tipoPartido: string = '';
  nombreEquipo1: string = '';
  nombreEquipo2: string = '';
  fecha: string = '';
  estadio: string = '';
  partidos: { id: number, tipoPartido: string, nombreEquipo1: string, nombreEquipo2: string, fecha: string, estadio: string }[] = [];

  constructor(private router: Router) { }

  agregarPartido() {
    if (this.tipoPartido && this.nombreEquipo1 && this.nombreEquipo2 && this.fecha && this.estadio) {
      const id = new Date().getTime();
      this.partidos.push({ id, tipoPartido: this.tipoPartido, nombreEquipo1: this.nombreEquipo1, nombreEquipo2: this.nombreEquipo2, fecha: this.fecha, estadio: this.estadio });
      this.tipoPartido = '';
      this.nombreEquipo1 = '';
      this.nombreEquipo2 = '';
      this.fecha = '';
      this.estadio = '';
    }
  }

  eliminarPartido(partidoId: number) {
    this.partidos = this.partidos.filter(partido => partido.id !== partidoId);
  }

  cancelar() {
    this.router.navigate(['/actualizacion-torneo']);
  }

  crearTorneo() {
    // Lógica para agregar el torneo a la base de datos
    this.router.navigate(['/partido-creado']);
  }

  bandera: boolean = false;
  currentInputId: string | null = null;

  openModal(inputId: string) {
    this.currentInputId = inputId;
    this.bandera = true;
  }

  closeForm() {
    this.bandera = false;
  }

  // Esto por ahora esta con numeros, la idea es q despues sean nombres de paises o cuadros extraidos de la base de datos del torneo
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
        if (this.currentInputId === 'equipo1') {
          this.nombreEquipo1 = inputElement.value;
        } else if (this.currentInputId === 'equipo2') {
          this.nombreEquipo2 = inputElement.value;
        } else if (this.currentInputId === 'estadio') {
          this.estadio = inputElement.value;
        }
      }
      this.closeForm();
    }
  }
}
