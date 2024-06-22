import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-partido-creado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './partido-creado.component.html',
  styleUrl: './partido-creado.component.css'
})
export class PartidoCreadoComponent {

  constructor(private router: Router) { }

  navigateToCreacionPartido() {
    this.router.navigate(['/creacion-partido']);
  }
}
