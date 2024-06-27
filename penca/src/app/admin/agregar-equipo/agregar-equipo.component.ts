import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-agregar-equipo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-equipo.component.html',
  styleUrl: './agregar-equipo.component.css'
})
export class AgregarEquipoComponent {

  bandera: boolean = false;
  currentInputId: string | null = null;
  nombreTorneo: string = '';
  anoTorneo: string = '';
  nombreEquipo: string = '';
  equiposs: { id: number, nombre: string }[] = []; 

  constructor(private router: Router, private infoService: InfoService) { }

  openModal(inputId: string) {
    this.currentInputId = inputId;
    this.bandera = true;
  }

  cancelar() {
    this.router.navigate(['/opciones-admin']);
  }

  eliminarEquipo(equipoId: number) {
    this.equiposs = this.equiposs.filter(equipo => equipo.id !== equipoId);
  }

  async actualizarTorneo() {
    await this.fetchInsertarEquipos();
    this.router.navigate(['/actualizacion-torneo-final']);
  }

  async fetchInsertarEquipos() {
    var url = "http://localhost:3000/admin/insertTeams";
    const evento = this.infoService.getEvento();
    const body = {
      nombre_ev: evento?.nombre, 
      anio_ev: evento?.anio,
      equipos: this.equiposs.map(equipo => equipo.nombre) 
    }
    await fetch(url, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(body)});
  }


  agregarEquipo() {
    if (this.nombreEquipo) {
      const id = new Date().getTime(); 
      this.equiposs.push({ id, nombre: this.nombreEquipo });
      this.nombreEquipo = '';
    }
  }

  closeForm() {
    this.bandera = false;
  }

  ngOnInit() {
    this.fetchEquipos();
  }
  
  async fetchEquipos() {
    const response = await fetch("http://localhost:3000/admin/getEquipos");
    await response.json().then((res) => {
      if (res.equipos) {
        this.equipos = res.equipos;
      }
    }); 
  };
  
  selectedEquipo: String | null = null;
  equipos: String[] = [];

  selectEquipo(equipo: String) {
    this.selectedEquipo = equipo;
  }
  saveSelectedEquipo() {
    if (this.selectedEquipo !== null && this.currentInputId !== null) {
      this.nombreEquipo = this.selectedEquipo.toString();
      this.closeForm();
    }
  }
}