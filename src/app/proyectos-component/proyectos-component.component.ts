import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpleadoService } from '../servicio-empleado.service';
import { EmpleadoService } from '../empleados.service';
import { Empleado } from '../Empleado.model';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent  implements OnInit{

  constructor(private router: Router,private Miservicio :ServicioEmpleadoService, private addService: EmpleadoService){

  }
  ngOnInit(): void {
    this.empleados=this.addService.empleados;
  }

    volverHome(): void{
      //direcciona al home
      this.router.navigate(['']);
    } 

    agregarEmpleado(): void{
      //this.Miservicio.mensaje("Nombre:"+this.nombre + " Apellido:"+ this.apellido+" Cargo:"+this.cargo+" Salario:"+this.salario)
      this.addService.addEmpleadoService({nombre:this.nombre,apellido: this.apellido,cargo:this.cargo,salario:this.salario})
      this.nombre="";
      this.apellido="";
      this.cargo="";
      this.salario=0; 
      this.router.navigate(['']);

  
    }

    title = 'Registro de empleados';
    empleados:Empleado[]=[];
    nombre : string = "";
    apellido : string = "";
    cargo : string = "";
    salario : number = 0;

}
