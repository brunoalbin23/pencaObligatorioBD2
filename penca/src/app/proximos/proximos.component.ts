import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';
import { IPartido } from '../interfaces/ipartido';
import { UserService } from '../services/user.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-proximos',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './proximos.component.html',
  styleUrl: './proximos.component.css'
})
export class ProximosComponent implements OnInit {
  bandera: boolean = false;

  setBanderaPredecir(partido: IPartido) {
    this.selectedPartido = partido;
    this.bandera = !this.bandera;
  }

  closeForm() {
    this.bandera = !this.bandera;
  }

  async guardar(){
    this.fetchPredecirPartido();
    this.closeForm();
  }

  async fetchPredecirPartido() {
    const url = "http://localhost:3000/alumno/ingresarPrediccionPartido";
    const ci = this.userService.getCI();
    const body = {
      ci: ci,
      nombre_eq1: this.selectedPartido?.nombre_eq1,
      nombre_eq2: this.selectedPartido?.nombre_eq2,
      prediccion_eq1: (<HTMLInputElement>document.getElementById("prediccion-eq1")).value,
      prediccion_eq2: (<HTMLInputElement>document.getElementById("prediccion-eq2")).value,
      fecha_hora: formatDate(<Date>this.selectedPartido?.fecha_hora, "yyyy-MM-dd hh-mm-ss", "en")
    }
    console.log(body);
    await fetch(url, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(body)}); 
  }

  partidos: IPartido[] = [];
  selectedPartido: IPartido | null = null;

  constructor(private router: Router, private infoService: InfoService, private userService: UserService) { }

  ngOnInit() {
    this.fetchPartidos();
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

  navigateToSala() {
    this.router.navigate(['/sala-general']);
  }

  //actualizarPartido(id: number) {
    // Lógica para actualizar el partido
    // Aquí puedes redirigir a otro componente para actualizar el partido seleccionado
   // this.router.navigate(['/actualizar-partido', id]);
  //}
}