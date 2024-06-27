import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ICarrera } from '../interfaces/icarrera';
import { formatDate } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatFormFieldModule]
})

export class LoginComponent {
  bandera: boolean = false;
  bandera2: boolean = false;
  bandera3: boolean = false;
  bandera4: boolean = false;
  

  constructor(private router: Router, private userService: UserService) { }

  navigateToElegirTorneo() {
    this.router.navigate(['/elegir-torneo']);
  }

  async fetchRegistro() {
    const url = "http://localhost:3000/alumno/register";
    const ci = + (<HTMLInputElement>document.getElementById("registro-ci")).value;
    const body = {
      ci: ci,
      password: (<HTMLInputElement>document.getElementById("registro-contraseña")).value,
      nombre: (<HTMLInputElement>document.getElementById("registro-nombre")).value,
      apellido: (<HTMLInputElement>document.getElementById("registro-apellido")).value,
      fechaNac: (<HTMLInputElement>document.getElementById("registro-fnac")).value,
      id_carrera: this.selectedCarrera?.id,
      fecha_ini: formatDate(new Date(), "yyyy-MM-dd", "en")
    }
    await fetch(url, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(body)});
    this.userService.setCI(ci);
    this.navigateToElegirTorneo(); 
  }

  fetchLogin() {
    this.userService.setCI(92856362);
    this.navigateToElegirTorneo();
  }

  navigateToOpcionesAdmin() {
    this.router.navigate(['/opciones-admin']);
  }

  setBanderaLogin() {
    this.bandera = !this.bandera;
  }

  setBanderaLogin2() {
    this.bandera4 = !this.bandera4;
  }

  setBanderaRegistro() {
    this.bandera2 = !this.bandera2;
  }

  setBanderaElegirCarrera() {
    this.bandera3 = !this.bandera3;
  }

  ingresarAdmin() {
    this.bandera = !this.bandera;
  }

  closeForm() {
    this.bandera = !this.bandera;
  }

  closeForm2() {
    this.bandera2 = !this.bandera2;
  }

  closeForm3() {
    this.bandera3 = !this.bandera3;
  }

  closeForm4() {
    this.bandera4 = !this.bandera4;
  }

  //MOSTRAR CARRERASA

  currentInputId: string | null = null;

  openModal(inputId: string) {
    this.currentInputId = inputId;
    this.bandera3 = true;
  }

  ngOnInit() {
    this.fetchCarreras();
  }

  async fetchCarreras() {
    const response = await fetch("http://localhost:3000/admin/getCarreras");
    await response.json().then((res) => {
      if (res.carreras) {
        this.carreras = res.carreras;
      }
    }); 
  };

  selectedCarrera: ICarrera | null = null;
  carreras: ICarrera[] = [];

  selectCarrera(carrera: ICarrera) {
    this.selectedCarrera = carrera;
  }

  saveSelectedCarrera() {
    if (this.selectedCarrera !== null && this.currentInputId !== null) {
      const inputElement = document.getElementById(this.currentInputId) as HTMLInputElement;
      if (inputElement) {
        inputElement.value = this.selectedCarrera.nombre;
      }
      this.closeForm3();
    }
  }
}
