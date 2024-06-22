import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-proximos',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './proximos.component.html',
  styleUrl: './proximos.component.css'
})
export class ProximosComponent implements OnInit {
  partidos: { id: number, equipo1: string, equipo2: string, fecha: Date }[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    // Aquí iría la lógica para cargar los partidos desde la base de datos
    this.partidos = [
      { id: 1, equipo1: 'Equipo A', equipo2: 'Equipo B', fecha: new Date('2024-07-01T14:00:00') },
      { id: 2, equipo1: 'Equipo C', equipo2: 'Equipo D', fecha: new Date('2024-06-30T16:00:00') },
      // Agregar más partidos según sea necesario
    ];

    this.partidos.sort((a, b) => b.fecha.getTime() - a.fecha.getTime());
  }

  navigateToSala() {
    this.router.navigate(['/sala-general']);
  }

  actualizarPartido(id: number) {
    // Lógica para actualizar el partido
    // Aquí puedes redirigir a otro componente para actualizar el partido seleccionado
    this.router.navigate(['/actualizar-partido', id]);
  }
}