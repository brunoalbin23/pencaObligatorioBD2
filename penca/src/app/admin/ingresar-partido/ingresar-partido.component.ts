import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IEstadio } from '../../interfaces/iestadio';

@Component({
  selector: 'app-ingresar-partido',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ingresar-partido.component.html',
  styleUrls: ['./ingresar-partido.component.css']
})
export class IngresarPartidoComponent {
  
  ngOnInit() {
    this.fetchTiposPartidos();
    this.fetchEstadios();
  }
  
  constructor(private router: Router) { }

  cancelar() {
    this.router.navigate(['/actualizacion-torneo']);
  }

  crearTorneo() {
    this.router.navigate(['/torneo-creado']);
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

  async fetchTiposPartidos() {
    const response = await fetch("http://localhost:3000/admin/getTiposPartidos");
    await response.json().then((res) => {
      if (res.tiposPartidos) {
        this.tiposPartidos = res.tiposPartidos;
      }
    }); 
  };

  selectedTipoPartido: String | null = null;
  tiposPartidos: String[] = [];

  selectTipoPartido(tipoPartido: String) {
    this.selectedTipoPartido = tipoPartido;
  }

  saveSelectedTipoPartido() {
    if (this.selectedTipoPartido !== null && this.currentInputId !== null) {
      const inputElement = document.getElementById(this.currentInputId) as HTMLInputElement;
      if (inputElement) {
        inputElement.value = this.selectedTipoPartido.toString();
      }
      this.closeForm();
    }
  }

  bandera2: boolean = false;
  currentInputId2: string | null = null;

  openModal2(inputId: string) {
    this.currentInputId2 = inputId;
    this.bandera2 = true;
  }

  closeForm2() {
    this.bandera2 = false;
  }

  async fetchEstadios() {
    const response = await fetch("http://localhost:3000/admin/getEstadios");
    await response.json().then((res) => {
      if (res.estadios) {
        console.log(res.estadios)
        this.estadios = res.estadios;
      }
    }); 
  };

  selectedEstadio: IEstadio | null = null;
  estadios: IEstadio[] = [];

  selectEstadio(estadio: IEstadio) {
    this.selectedEstadio = estadio;
  }

  saveSelectedEstadio() {
    if (this.selectedEstadio !== null && this.currentInputId2 !== null) {
      const inputElement = document.getElementById(this.currentInputId2) as HTMLInputElement;
      if (inputElement) {
        inputElement.value = this.selectedEstadio.id;
      }
      this.closeForm2();
    }
  }
}
