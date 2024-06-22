import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sala-general',
  standalone: true,
  imports: [],
  templateUrl: './sala-general.component.html',
  styleUrl: './sala-general.component.css'
})
export class SalaGeneralComponent {

  constructor(private router: Router) { }

  navigateToFinalizados() {
    this.router.navigate(['/finalizados']);
  }

  navigateToProximos() {
    this.router.navigate(['/proximos']);
  }

  navigateToRanking() {
    this.router.navigate(['/ranking']);
  }

  navigateToSalir() {
    this.router.navigate(['/']);
  }
}