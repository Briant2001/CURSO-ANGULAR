import { Component, OnInit, ViewChild } from '@angular/core';
import { Empleado } from '../Empleado.model';
import { ServicioEmpleadoService } from '../servicio-empleado.service';
import { EmpleadoService } from '../empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent implements OnInit {
  title = 'Registro de empleados';
  nombre: string = '';
  apellido: string = '';
  cargo: string = '';
  salario: number = 0;

  constructor(
    private Miservicio: ServicioEmpleadoService,
    private empleadoService: EmpleadoService
  ) {
    //this.empleados=this.addService.empleados;
  }
  ngOnInit(): void {
    //this.empleados=this.addService.empleados;
    this.empleadoService.getEmpleados().subscribe((res) => {
      this.empleados = Object.values(res);
      console.log('Cuando llamo ' + this.empleados[0]);
      this.empleadoService.setEmpleados(this.empleados);
    });
  }

  ///empleadosCopy :Empleado[]=[...this.empleados];
  empleados: Empleado[] = [];

  agregarEmpleado(): void {
    //this.Miservicio.mensaje("Nombre:"+this.nombre + " Apellido:"+ this.apellido+" Cargo:"+this.cargo+" Salario:"+this.salario)
    this.empleadoService.addEmpleadoService({
      nombre: this.nombre,
      apellido: this.apellido,
      cargo: this.cargo,
      salario: this.salario,
    });
    this.nombre = '';
    this.apellido = '';
    this.cargo = '';
    this.salario = 0;
  }
}
