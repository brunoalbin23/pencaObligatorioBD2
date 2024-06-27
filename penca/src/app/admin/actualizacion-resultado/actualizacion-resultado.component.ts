import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, formatDate } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InfoService } from '../../services/info.service';
import { IPartido } from '../../interfaces/ipartido';


@Component({
  selector: 'app-actualizacion-resultado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './actualizacion-resultado.component.html',
  styleUrls: ['./actualizacion-resultado.component.css']
})
export class ActualizacionResultadoComponent implements OnInit {

  bandera: boolean = false;
  currentInputId: string | null = null;
  selectedPartido: IPartido | null = null;
  partidos: IPartido[] = [];

  constructor(private router: Router, private infoService: InfoService) { }

  ngOnInit() {
    this.fetchPartidos();
  }

  cancelar() {
    this.router.navigate(['/actualizacion-torneo']);
  }

  closeForm() {
    this.bandera = false;
  }

  openModal(inputId: string) {
    this.currentInputId = inputId;
    this.bandera = true;
  }

  async fetchPartidos() {
    var url = "http://localhost:3000/alumno/getPartidos?nombre=";
    const evento = this.infoService.getEvento();
    if(evento) {
      url += encodeURI(evento.nombre) + '&anio=' + evento.anio;
    }
    const response = await fetch(url);
    await response.json().then((res) => {
      if (res.partidos) {
        this.partidos = res.partidos;
      }
    });
    this.ordenarPartidos();
  }

  ordenarPartidos() {
    this.partidos.sort((a, b) => Date.parse(b.fecha_hora.toString()) - Date.parse(a.fecha_hora.toString()));
  }

  selectPartido(partido: IPartido) {
    this.selectedPartido = partido;
  }

  saveSelectedPartido() {
    if (this.selectedPartido !== null && this.currentInputId !== null) {
      const inputElement = document.getElementById(this.currentInputId) as HTMLInputElement;
      if (inputElement) {
        inputElement.value = this.selectedPartido.nombre_eq1 + " vs " + this.selectedPartido.nombre_eq2; 
      }
      this.closeForm();
    }
  }

  formatFecha(date: Date): string {
    return formatDate(date, 'yyyy-MM-dd HH:mm:ss', 'en');
  }

  async crearTorneo() {
    await this.fetchIngresarResultado();
    this.router.navigate(['/resultado-actualizado']);
  }

  async fetchIngresarResultado() {
    
    var url = "http://localhost:3000/admin/actualizarPartido";
    const evento = this.infoService.getEvento();
    const body = {
      nombre_eq1: this.selectedPartido?.nombre_eq1,
      nombre_eq2: this.selectedPartido?.nombre_eq2,
      fecha_hora: this.formatFecha(<Date>this.selectedPartido?.fecha_hora),
      g1: (<HTMLInputElement>document.getElementById("resultado1")).value,
      g2: (<HTMLInputElement>document.getElementById("resultado2")).value,
      nombre_ev:evento?.nombre,
      anio_ev:evento?.anio
    }
    console.log(body);
    await fetch(url, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(body)}); 
  }

}
