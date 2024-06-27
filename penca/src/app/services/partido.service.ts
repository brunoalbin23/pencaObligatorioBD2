import { Injectable } from '@angular/core';
import { IPartido } from '../interfaces/ipartido';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {
  private partido: IPartido | null = null;

  public getPartido() {
    return this.partido;
  }

  public setPartido(partido: IPartido) {
    this.partido = partido;
  }

  constructor() { }
}
