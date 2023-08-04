import { Component,EventEmitter,Output } from "@angular/core";
import { ServicioEmpleadoService } from "../servicio-empleado.service";


@Component({
    selector:"app-caracteristicas-empleado",
    templateUrl:"./caracteristicasempleados.component.html",
    styleUrls:["./caracteristicasempleados.component.css"],

})
export class CaracteristicasEmpleado{
    title="Caracteristicas empleado"
    //decorador
    @Output() caractsEmpleados = new EventEmitter<string>();

    constructor(private miServicio: ServicioEmpleadoService){

    }

    addCaracteriticas(value:string){ 
        this.miServicio.mensaje(value)
        this.caractsEmpleados.emit(value);
    }   
} 