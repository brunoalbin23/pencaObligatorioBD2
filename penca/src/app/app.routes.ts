import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrediccionRegistroComponent } from './prediccion-registro/prediccion-registro.component';
import { SalaGeneralComponent } from './sala-general/sala-general.component';

export const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'prediccion-registro', component: PrediccionRegistroComponent },
  { path: 'sala-general', component: SalaGeneralComponent }
];