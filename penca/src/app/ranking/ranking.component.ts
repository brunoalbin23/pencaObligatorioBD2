import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent {
  personas: { id: number, nombre: string, apellido: string, puntaje: number }[] = [];

  constructor(private router: Router) { 
    // Datos de ejemplo
    this.personas = [
      { id: 1, nombre: 'Juan', apellido: 'Pérez', puntaje: 85 },
      { id: 2, nombre: 'Ana', apellido: 'García', puntaje: 92 },
      { id: 3, nombre: 'Carlos', apellido: 'Rodríguez', puntaje: 78 },
      // Agregar más personas según sea necesario
    ];
    this.ordenarPersonas();
  }

  navigateToSala() {
    this.router.navigate(['/sala-general']);
  }

  // Método para agregar una persona al ranking
  agregarPersona(nombre: string, apellido: string, puntaje: number) {
    const id = new Date().getTime();
    this.personas.push({ id, nombre, apellido, puntaje });
  }

  // Método para eliminar una persona del ranking
  eliminarPersona(personaId: number) {
    this.personas = this.personas.filter(persona => persona.id !== personaId);
  }

  ordenarPersonas() {
    this.personas.sort((a, b) => b.puntaje - a.puntaje);
  }
}
