import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrediccionRegistroComponent } from './prediccion-registro/prediccion-registro.component';
import { SalaGeneralComponent } from './sala-general/sala-general.component';
import { SleccionarPaisComponent } from './sleccionar-pais/sleccionar-pais.component';
import { appRoutes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppComponent, RouterOutlet, LoginComponent, PrediccionRegistroComponent, SalaGeneralComponent, SleccionarPaisComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'penca';
}
