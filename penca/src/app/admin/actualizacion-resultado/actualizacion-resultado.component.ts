import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actualizacion-resultado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './actualizacion-resultado.component.html',
  styleUrls: ['./actualizacion-resultado.component.css']
})
export class ActualizacionResultadoComponent {
  nombreEquipo1: string = '';
  nombreEquipo2: string = '';
  resultado1: string = '';
  resultado2: string = '';
  partidos: { id: number, nombreEquipo1: string, nombreEquipo2: string, resultado1?: string, resultado2?: string }[] = [
    { id: 1, nombreEquipo1: 'Equipo A', nombreEquipo2: 'Equipo B' },
    { id: 2, nombreEquipo1: 'Equipo C', nombreEquipo2: 'Equipo D' }
  ];

  selectedPartido: any = null;
  bandera: boolean = false;
  currentInputId: string | null = null;

  constructor(private router: Router) { }

  agregarPartido() {
    if (this.selectedPartido && this.resultado1 && this.resultado2) {
      this.partidos = this.partidos.map(partido => {
        if (partido.id === this.selectedPartido.id) {
          return { ...partido, resultado1: this.resultado1, resultado2: this.resultado2 };
        }
        return partido;
      });
      this.selectedPartido = null;
      this.resultado1 = '';
      this.resultado2 = '';
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
    this.router.navigate(['/resultado-actualizado']);
  }

  openModal(inputId: string) {
    this.currentInputId = inputId;
    this.bandera = true;
  }

  closeForm() {
    this.bandera = false;
  }

  selectPartido(partido: any) {
    this.selectedPartido = partido;
    this.nombreEquipo1 = partido.nombreEquipo1;
    this.nombreEquipo2 = partido.nombreEquipo2;
    this.closeForm();
  }

  // Esto por ahora esta con numeros, la idea es que despues sean nombres de partidos extraidos de la base de datos del torneo
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
        }
      }
      this.closeForm();
    }
  }
}
