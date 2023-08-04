import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadoService } from '../servicio-empleado.service';
import { EmpleadoService } from '../empleados.service';
import { Empleado } from '../Empleado.model';

@Component({
  selector: 'app-actualizacion-component',
  templateUrl: './actualizacion-component.component.html',
  styleUrls: ['./actualizacion-component.component.css']
})
export class ActualizacionComponentComponent {

  constructor(private router: Router,private Miservicio :ServicioEmpleadoService, private empleadoService: EmpleadoService
    ,private route: ActivatedRoute
    ){

  }
  ngOnInit(): void {
    this.accion = parseInt(this.route.snapshot.queryParams['accion'])

    this.empleados=this.empleadoService.empleados;
    this.indice = this.route.snapshot.params['id'];
    let empleado: Empleado = this.empleadoService.find(this.indice);
    let arrayDatos : string[]= [];
    let i:number=0;

    for (const clave in empleado) {
      if (empleado.hasOwnProperty(clave)) {
        arrayDatos[i]= empleado[clave];
        i++;
        // console.log(`${clave}: ${valor}`);
      }
    }
    this.apellido = arrayDatos[0];
    this.cargo = arrayDatos[1];
    this.nombre = arrayDatos[2];
    this.salario = parseInt(arrayDatos[3]);


  }

    volverHome(): void{
      //direcciona al home
      this.router.navigate(['']);
    } 

    // updateEmpleado(): void{
    //   //this.Miservicio.mensaje("Nombre:"+this.nombre + " Apellido:"+ this.apellido+" Cargo:"+this.cargo+" Salario:"+this.salario)
    //   this.empleadoService.update(this.indice,{nombre:this.nombre,apellido: this.apellido,cargo:this.cargo,salario:this.salario})
    //   this.nombre="";
    //   this.apellido="";
    //   this.cargo="";
    //   this.salario=0; 
    //   this.router.navigate(['']);
    // }

    // deleteEmpleado(){
    //   this.empleadoService.delete(this.indice)
    //   this.router.navigate(['']);
      

    // }

    updateEmpleado(): void{
      //this.Miservicio.mensaje("Nombre:"+this.nombre + " Apellido:"+ this.apellido+" Cargo:"+this.cargo+" Salario:"+this.salario)
      
      if(this.accion == 1){
      this.empleadoService.update(this.indice,{nombre:this.nombre,apellido: this.apellido,cargo:this.cargo,salario:this.salario})
      this.nombre="";
      this.apellido="";
      this.cargo="";
      this.salario=0; 
      console.log("Modificar");
    }else{
      this.empleadoService.delete(this.indice);
    }
      this.router.navigate(['/home']);
    }


    title = 'Actualizacion de empleados';
    empleados:Empleado[]=[];
    nombre : string = "";
    apellido : string = "";
    cargo : string = "";
    salario : number = 0;
    indice : number;
    accion:number=0;

}
