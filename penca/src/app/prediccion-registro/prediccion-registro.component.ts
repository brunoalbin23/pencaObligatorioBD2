import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prediccion-registro',
  standalone: true,
  imports: [],
  templateUrl: './prediccion-registro.component.html',
  styleUrl: './prediccion-registro.component.css'
})
export class PrediccionRegistroComponent {

  constructor(private router: Router) { }

  navigateToSala() {
    this.router.navigate(['/sala-general']);
  }
}
