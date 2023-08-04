import { ActivatedRouteSnapshot, CanActivate, CanActivateChildFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginServiceService } from "./login-service.service";
import { Injectable } from "@angular/core";
@Injectable()
export class LoginGuardia  implements CanActivate{
    constructor(private loginService: LoginServiceService, private router: Router) {
        
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        
        if(this.loginService.isLogin()){

            return true
        }else 
            this.router.navigate(['/login'])
            return false


    }
}