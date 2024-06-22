import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-equipo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-equipo.component.html',
  styleUrl: './agregar-equipo.component.css'
})
export class AgregarEquipoComponent {
  nombreTorneo: string = '';
  nombreEquipo: string = '';
  equipos: { id: number, nombre: string }[] = []; 

  constructor(private router: Router) { }

  agregarEquipo() {
    if (this.nombreEquipo) {
      const id = new Date().getTime(); 
      this.equipos.push({ id, nombre: this.nombreEquipo });
      this.nombreEquipo = '';
    }
  }

  eliminarEquipo(equipoId: number) {
    this.equipos = this.equipos.filter(equipo => equipo.id !== equipoId);
  }

  cancelar() {
    this.router.navigate(['/actualizacion-torneo']);
  }

  actualizarTorneo() {
    // Lógica para agregar el torneo a la base de datos q ni idea jaksdjkad
    this.router.navigate(['/actualizacion-torneo-final']);
  }
}