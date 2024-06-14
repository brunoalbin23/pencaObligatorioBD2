import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroService } from '../registro.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule]
})

export class LoginComponent {
  bandera2: boolean = false;
  registro = {
    cedula: '',
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    usuario: '',
    contrasena: '',
    confirmarContrasena: ''
  };

  constructor(private registroService: RegistroService) { }

  onSubmit() {
    this.registroService.registrarUsuario(this.registro).subscribe(response => {
      console.log('Usuario registrado:', response);
    }, error => {
      console.error('Error al registrar el usuario:', error);
    });
  }

  closeForm2() {
    this.bandera2 = false;
  }
}
