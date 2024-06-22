import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-creacion-torneo',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './creacion-torneo.component.html',
  styleUrls: ['./creacion-torneo.component.css']
})
export class CreacionTorneoComponent {
  nombreTorneo: string = '';
  anoTorneo: string = '';
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
    this.router.navigate(['/opciones-admin']);
  }

  crearTorneo() {
    // Lógica para agregar el torneo a la base de datos q ni idea jaksdjkad
    this.router.navigate(['/torneo-creado']);
  }
}
