import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IEstadio } from '../../interfaces/iestadio';
import { ITipoPartido } from '../../interfaces/itipo-partido';

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
    this.fetchEquipo();
  }
  
  constructor(private router: Router) { }

  cancelar() {
    this.router.navigate(['/actualizacion-torneo']);
  }

  crearTorneo() {
    this.router.navigate(['/torneo-creado']);
  }

  //TIPOS DE PARTIDOOOOOOOOOOOOOOOOOOOS

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
          console.log(res.tiposPartidos)
          this.tiposPartidos = res.tiposPartidos;
      }
    }); 
  };

  selectedTipoPartido: ITipoPartido | null = null;
  tiposPartidos: ITipoPartido[] = [];

  selectTipoPartido(tipoPartido: ITipoPartido) {
    this.selectedTipoPartido = tipoPartido;
  }

  saveSelectedTipoPartido() {
    if (this.selectedTipoPartido !== null && this.currentInputId !== null) {
      const inputElement = document.getElementById(this.currentInputId) as HTMLInputElement;
      if (inputElement) {
        inputElement.value = this.selectedTipoPartido.nombre;
      }
      this.closeForm();
    }
  }


  //ESTADIOOOOOOOOOOOOOOOOOOOOOOOOS

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
        inputElement.value = this.selectedEstadio.nombre;
      }
      this.closeForm2();
    }
  }

  //EQUIPOS

  bandera3: boolean = false;
  currentInputId3: string | null = null;

  openModal3(inputId: string) {
    this.currentInputId3 = inputId;
    this.bandera3 = true;
  }

  closeForm3() {
    this.bandera3 = false;
  }

  async fetchEquipo() {
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
    if (this.selectedEquipo !== null && this.currentInputId2 !== null) {
      const inputElement = document.getElementById(this.currentInputId2) as HTMLInputElement;
      if (inputElement) {
        inputElement.value = this.selectedEquipo.toString();
      }
      this.closeForm3();
    }
  }
}
