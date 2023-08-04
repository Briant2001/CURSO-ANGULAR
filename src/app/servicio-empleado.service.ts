import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadoService {

  constructor() {

  }

  mensaje(value : string):void {
    alert(value);
  }
}
