import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'
import { LoginServiceService } from './login/login-service.service';
// import { Empleado } from './Empleado.model';
// import { object } from 'firebase-functions/v1/storage';
// import { ServicioEmpleadoService } from './servicio-empleado.service';
// import { EmpleadoService } from './empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private loginService :LoginServiceService){

  }
  ngOnInit(): void {
    firebase.initializeApp(

      {
        apiKey: "AIzaSyDGtR8kUM_B1vX9V2ZI1XhlgMptaI8NKbw",
        authDomain: "realtime-angular-de4ac.firebaseapp.com",
      }
    )
  } 

  isLogin(){
    return this.loginService.isLogin();
  }
  logout(){
    return this.loginService.logout();

  }
}
