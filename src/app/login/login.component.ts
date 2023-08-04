import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginServiceService){

  }
  ngOnInit() { } 

  login(form: NgForm) {
  
    const email = form.value.email;
    const pass = form.value.password;
    this.loginService.login(email,pass);
  }
}
