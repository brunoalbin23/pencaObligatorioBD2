import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partido-creado',
  standalone: true,
  imports: [],
  templateUrl: './partido-creado.component.html',
  styleUrl: './partido-creado.component.css'
})
export class PartidoCreadoComponent {

  constructor(private router: Router) { }

  navigateToCreacionPartido() {
    this.router.navigate(['/creacion-partido']);
  }
}
