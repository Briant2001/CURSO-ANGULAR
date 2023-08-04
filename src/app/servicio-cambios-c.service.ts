import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicioCambiosCService {

  constructor() { }

  private textoFuente = new Subject<string>();
  textoActual$ = this.textoFuente.asObservable();

  cambiarTexto(nuevoTexto: string) {
    this.textoFuente.next(nuevoTexto);
  }
}
