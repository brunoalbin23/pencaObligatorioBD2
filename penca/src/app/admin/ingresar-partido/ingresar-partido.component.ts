import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ingresar-partido',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ingresar-partido.component.html',
  styleUrls: ['./ingresar-partido.component.css']
})
export class IngresarPartidoComponent {
  
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

  ngOnInit() {
    this.fetchTiposPartidos();
  }

  async fetchTiposPartidos() {
    const response = await fetch("http://localhost:3000/admin/getTiposPartidos");
    await response.json().then((res) => {
      if (res.tiposPartidos) {
        this.tiposPartidos = res.tiposPartidos;
      }
    }); 
  };


  //Esto por ahora esta con numeros, la idea es q despues sean nombres de paises o cuadros extraidos de la base de datos del torneo
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
}
