import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoComponent } from './empleadoHijo/empleadohijo.component';
import { CaracteristicasEmpleado } from './caracteristcasEmpleado/caracteristicasempleados.component';
import { TdTableComponent } from './td-table/td-table.component';
import { ServicioEmpleadoService } from './servicio-empleado.service';
import { EmpleadoService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { Routes, RouterModule} from '@angular/router';
import { ActualizacionComponentComponent } from './actualizacion-component/actualizacion-component.component';
import { PageErrorComponentComponent } from './page-error-component/page-error-component.component';
import { DataServices } from './data.service';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginServiceService } from './login/login-service.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginGuardia } from './login/login-guardian';

const appRouetes : Routes=[
  {path:'home',component:HomeComponentComponent,canActivate:[LoginGuardia]},
  {path:'',redirectTo:'/home',pathMatch:'full' },
  {path:'proyectos', component:ProyectosComponentComponent,canActivate:[LoginGuardia]},
  {path:'quienesSomos', component:QuienesComponentComponent,canActivate:[LoginGuardia]},
  {path:'contacto', component:ContactoComponentComponent,canActivate:[LoginGuardia]},
  {path:'update', component:ActualizacionComponentComponent,canActivate:[LoginGuardia]},
  {path:'update/:id', component:ActualizacionComponentComponent,canActivate:[LoginGuardia]},
  {path:'login',component:LoginComponent},
  {path:'**', component:PageErrorComponentComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    CaracteristicasEmpleado,
    TdTableComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ActualizacionComponentComponent,
    PageErrorComponentComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouetes),
    HttpClientModule
  ],
  providers: [ServicioEmpleadoService,EmpleadoService,DataServices,LoginServiceService,CookieService,LoginGuardia],
  bootstrap: [AppComponent]
})
export class AppModule { }
