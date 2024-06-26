import { Injectable } from '@angular/core';
import { IEvento } from '../interfaces/ievento';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private evento: IEvento | null = null;

  public getEvento() {
    return this.evento;
  }

  public setEvento(evento: IEvento) {
    this.evento = evento;
  }

  constructor() { }
}
