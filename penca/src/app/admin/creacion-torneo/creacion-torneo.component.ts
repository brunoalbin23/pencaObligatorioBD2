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

  bandera: boolean = false;
  currentInputId: string | null = null;
  nombreTorneo: string = '';
  anoTorneo: string = '';
  nombreEquipo: string = '';
  equiposs: { id: number, nombre: string }[] = []; 

  constructor(private router: Router) { }

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





  async crearTorneo() {
    await this.fetchInsertarEquipos();
    this.router.navigate(['/torneo-creado']);
  }

  async fetchInsertarEquipos() {
    const url = "http://localhost:3000/admin/insertarEventoEquipo";
    const body = {
      nombre_ev: (<HTMLInputElement>document.getElementById("nombreTorneo")).value,
      anio_ev: (<HTMLInputElement>document.getElementById("anoTorneo")).value,
      equipos: this.equiposs.map(equipo => equipo.nombre) 
    }
    console.log(body.equipos);
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