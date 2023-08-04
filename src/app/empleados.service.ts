import { Injectable } from "@angular/core";
import { Empleado } from "./Empleado.model";
import { ServicioEmpleadoService } from "./servicio-empleado.service";
import { DataServices } from "./data.service";

@Injectable()
export class EmpleadoService {

  nombre :string='';

  constructor(private ventanaEmergente : ServicioEmpleadoService,
    private dataService : DataServices
    ){

  }

    // empleados : Empleado=[
    //     {nombre:"Juan",apellido:"Salinas",cargo:"Jefe",salario:2345},
    //     {nombre:"Ana",apellido:"Salinas",cargo:"Jefe",salario:2345},
    //     {nombre:"Berta",apellido:"Salinas",cargo:"Jefe",salario:2345},
    //     {nombre:"Xotchil",apellido:"Salinas",cargo:"Jefe",salario:2345},
    //     {nombre:"Sheubam",apellido:"Salinas",cargo:"Jefe",salario:2345},
    //     {nombre:"Andres",apellido:"Salinas",cargo:"Jefe",salario:2345},
    //     {nombre:"Ebrard",apellido:"Salinas",cargo:"Jefe",salario:2345},
    //   ];
    empleados : Empleado=[];
      getEmpleados(){
        return this.dataService.getEmpleados()
      }

      setEmpleados(misEmpleados: Empleado){
        console.log(misEmpleados);
        this.empleados = misEmpleados;
      }

      
      addEmpleadoService(empleado: {nombre:string,apellido:string,cargo:string,salario:number}){
        this.ventanaEmergente.mensaje("                  Persona agregada \n"+
        "Nombre: "+empleado.nombre+"\nApellido: "+empleado.apellido+"\nCargo: "+empleado.cargo+"\nSalario: "+empleado.salario
        );
        this.empleados.push(empleado);
        console.log(this.empleados);
        this.dataService.saveEmpleados(this.empleados);
        //
      }

      find(indice:number){
        let empleado : Empleado=this.empleados[indice];
        return empleado;
      }

      update(indice:number,empleado:{}){
        console.log(indice);
        this.empleados[indice] = empleado;
        console.log(this.empleados);
        this.dataService.updateEmpleados(indice,empleado);
      }

      delete(indice:number){
        this.empleados.splice(indice,1);
        this.dataService.deleteEmpleados(indice);
        if (this.empleados!= null) {
          this.dataService.saveEmpleados(this.empleados);
          console.log("djdjd");
        }
      }

}