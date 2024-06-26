import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IEvento } from '../../interfaces/ievento';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-seleccionar-torneo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './seleccionar-torneo.component.html',
  styleUrl: './seleccionar-torneo.component.css'
})
export class SeleccionarTorneoComponent implements OnInit { 
  bandera: boolean = false;
  currentInputId: string | null = null;

  constructor(private router: Router, private infoService: InfoService) { }

  ngOnInit() {
    this.fetchEventos();
  }

  navigateToSala() {
    this.router.navigate(['/actualizacion-torneo']);
  }

  openModal(inputId: string) {
    this.currentInputId = inputId;
    this.bandera = true;
  }

  closeForm() {
    this.bandera = false;
  }

  async fetchEventos() {
    const response = await fetch("http://localhost:3000/admin/getEventos");
    await response.json().then((res) => {
      if (res.eventos) {
        this.eventos = res.eventos;
      }
    }); 
  }

  selectedEvento: IEvento | null = null;
  eventos: IEvento[] = [];

  selectEvento(evento: IEvento) {
    this.selectedEvento = evento;
  }

  saveSelectedEvento() {
    if (this.selectedEvento !== null && this.currentInputId !== null) {
      const inputElement = document.getElementById(this.currentInputId) as HTMLInputElement;
      if (inputElement) {
        inputElement.value = this.selectedEvento.nombre;
        this.infoService.setEvento(this.selectedEvento);
      }
      this.closeForm();
    }
  }
}
