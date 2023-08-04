import { Component,EventEmitter,Input, Output, ViewChild } from "@angular/core";
import { Empleado } from "../Empleado.model";

@Component({
    selector:"app-enpleadohijo",
    styleUrls:["./empleadohijo.component.css"],
    templateUrl:"./empleadohijo.component.html"
})
export class EmpleadoHijoComponent  {
    @Input() empleadoTable: Empleado;
    @Input() indice: number=0;
    @Output() eliminarEmpleado = new EventEmitter<string>();

    constructor() {
        
    }

    eliminarCelda(event: Event):void{

        const elementoObjetivo = event.target as HTMLElement;
        const id = (elementoObjetivo.parentElement?.parentElement?.id)?.toString();
        this.indice = parseInt(id ? id:"0");
        console.log(this.indice);
        elementoObjetivo.parentElement?.parentElement?.remove();
        this.eliminarEmpleado.emit((this.indice).toString());
        
    }



} ;