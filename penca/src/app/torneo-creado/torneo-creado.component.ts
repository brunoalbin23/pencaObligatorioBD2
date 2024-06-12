import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-torneo-creado',
  standalone: true,
  imports: [],
  templateUrl: './torneo-creado.component.html',
  styleUrl: './torneo-creado.component.css'
})
export class TorneoCreadoComponent {
  nombreTorneo: string = '';
  logoTorneo: File | null = null;
  nombreEquipo: string = '';
  escudoEquipo: File | null = null;
  equipos: { nombre: string, bandera: string }[] = [];

  constructor(private router: Router) { }

  // este metodo se lo robe al igna pero veremos si queda, igual no anda todavia
  agregarEquipo() {
    if (this.nombreEquipo && this.escudoEquipo) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.equipos.push({
          nombre: this.nombreEquipo,
          bandera: e.target.result
        });
        this.nombreEquipo = '';
        this.escudoEquipo = null;
      };
      reader.readAsDataURL(this.escudoEquipo);
    }
  }

  eliminarEquipo(equipo: { nombre: string, bandera: string }) {
    this.equipos = this.equipos.filter(e => e !== equipo);
  }

  cancelar() {
    this.router.navigate(['/prediccion-registro']);
  }

  crearTorneo() {
    // aca la idea seria que se agrege a una base d edatos o algo asi nose bien todavia
    this.router.navigate(['/torneo-creado']);
  }
}