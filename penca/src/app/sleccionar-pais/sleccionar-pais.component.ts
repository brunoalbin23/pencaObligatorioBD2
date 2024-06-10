import { Component } from '@angular/core';

@Component({
  selector: 'app-sleccionar-pais',
  standalone: true,
  templateUrl: './sleccionar-pais.component.html',
  styleUrls: ['./sleccionar-pais.component.css']
})
export class SleccionarPaisComponent {
  paises = [
    { id: 1, nombre: "Chile", imagen: "ruta" },
    { id: 2, nombre: "Argentina", imagen: "ruta" },
    // por ahora pruebo de forma local
  ];

  paisSeleccionado: any = null;

  seleccionarPais(pais: any): void {
    this.paisSeleccionado = pais;
  }

  guardarSeleccion(): void {
    if (this.paisSeleccionado) {
      //Esto no se si dejarlo asi pero por ahora messi
      alert("País seleccionado: " + this.paisSeleccionado.id);
      // Aca mandamos el id del pais para el bak y lo pasamos a la base
    } else {
      alert("Por favor, selecciona un país.");
    }
  }
}
