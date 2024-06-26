import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent {
  personas: { nombre: string, apellido: string, puntaje: number }[] = [];

  constructor(private router: Router, private infoService: InfoService) {}

  ngOnInit() {
    this.fetchRanking();
  }

  async fetchRanking() {
    var url = "http://localhost:3000/admin/getRanking?nombre="
    const evento = this.infoService.getEvento();
    if(evento) {
      url += encodeURI(evento.nombre) + '&anio=' + evento.anio;
    }
    const response = await fetch(url);
    await response.json().then((res) => {
      if (res.ranking) {
        this.personas = res.ranking;
      }
    });
    this.ordenarPersonas();
  }

  navigateToSala() {
    this.router.navigate(['/sala-general']);
  }

  ordenarPersonas() {
    this.personas.sort((a, b) => b.puntaje - a.puntaje);
  }
}
