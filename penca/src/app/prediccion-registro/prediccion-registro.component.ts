import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-prediccion-registro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './prediccion-registro.component.html',
  styleUrl: './prediccion-registro.component.css'
})
export class PrediccionRegistroComponent {
  bandera: boolean = false;
  currentInputId: string | null = null;

  constructor(private router: Router, private infoService: InfoService) { }

  navigateToSala() {
    this.router.navigate(['/sala-general']);
  }

  openModal(inputId: string) {
    this.currentInputId = inputId;
    this.bandera = true;
  }

  closeForm() {
    this.bandera = false;
  }

  ngOnInit() {
    this.fetchEquipos();
  }
  
  async fetchEquipos() {
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
    if (this.selectedEquipo !== null && this.currentInputId !== null) {
      const inputElement = document.getElementById(this.currentInputId) as HTMLInputElement;
      if (inputElement) {
        inputElement.value = this.selectedEquipo.toString();
      }
      this.selectedEquipo = null;
      this.closeForm();
    }
  }
}
