import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-equipo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crear-equipo.component.html',
  styleUrl: './crear-equipo.component.css'
})
export class CrearEquipoComponent {
  nombreTorneo: string = '';
  nombreEquipo: string = '';
  equipos: { id: number, nombre: string }[] = []; 

  constructor(private router: Router) { }

  cancelar() {
    this.router.navigate(['/opciones-admin']);
  }

  async actualizarTorneo() {
    await this.fetchCrearEquipo();
    this.router.navigate(['/equipo-creado']);
  }

  async fetchCrearEquipo() {
    const url = "http://localhost:3000/admin/insertTeam";
    const body = {
      nombre: (<HTMLInputElement>document.getElementById("nombre-equipo")).value
    }
    await fetch(url, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(body)}); 
  }
}