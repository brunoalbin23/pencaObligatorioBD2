import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';
import { UserService } from '../services/user.service';
import { IPartido } from '../interfaces/ipartido';
import { IPartidoPasado } from '../interfaces/ipartidopasado';

@Component({
  selector: 'app-finalizados',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './finalizados.component.html',
  styleUrl: './finalizados.component.css'
})
export class FinalizadosComponent implements OnInit {
  partidos: IPartidoPasado[] = [];

  constructor(private router: Router, private infoService: InfoService, private userService: UserService) { }

  ngOnInit() {
    this.fetchPartidosFinalizados();
  }

  async fetchPartidosFinalizados() {
    var url = "http://localhost:3000/alumno/getPartidosPasados?nombre="
    const evento = this.infoService.getEvento();
    const ci = this.userService.getCI();
    if(evento && ci) {
      url += encodeURI(evento.nombre) + '&anio=' + evento.anio + '&ci=' + ci;
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


}
