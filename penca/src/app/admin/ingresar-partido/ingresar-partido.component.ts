import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, formatDate } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IEstadio } from '../../interfaces/iestadio';
import { ITipoPartido } from '../../interfaces/itipo-partido';
import { InfoService } from '../../services/info.service';

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
  
  constructor(private router: Router, private infoService: InfoService) { }

  cancelar() {
    this.router.navigate(['/actualizacion-torneo']);
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
    var url = 'http://localhost:3000/admin/getEquipos?nombre='
    const evento = this.infoService.getEvento();
    if(evento) {
      url += encodeURI(evento.nombre) + '&anio=' + evento.anio;
    }
    const response = await fetch(url);
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
    if (this.selectedEquipo !== null && this.currentInputId3 !== null) {
      const inputElement = document.getElementById(this.currentInputId3) as HTMLInputElement;
      if (inputElement) {
        inputElement.value = this.selectedEquipo.toString();
      }
      this.closeForm3();
    }
  }

  //enivar todo
  async crearTorneo() {
    await this.fetchIngresarPartido();
    this.router.navigate(['/partido-creado']);
  }

  async fetchIngresarPartido() {
    
    var url = "http://localhost:3000/admin/insertGame";
    const evento = this.infoService.getEvento();
    const body = {
      nombre_eq1: (<HTMLInputElement>document.getElementById("equipo1")).value,
      nombre_eq2: (<HTMLInputElement>document.getElementById("equipo2")).value,
      fecha_hora: (<HTMLInputElement>document.getElementById("fecha")).value,
      nombre_ev: evento?.nombre,
      anio_ev: evento?.anio,
      estadio: (<HTMLInputElement>document.getElementById("estadio")).value,
      tipo_partido: (<HTMLInputElement>document.getElementById("tiposPartidos")).value
    }
    console.log(body);
    await fetch(url, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(body)}); 
  }
}
