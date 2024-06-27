import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private ci: number | null = null;

  public getCI() {
    return this.ci;
  }

  public setCI(ci: number) {
    this.ci = ci;
  }

  constructor() { }
}
