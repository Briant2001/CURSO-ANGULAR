import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./Empleado.model";
import { LoginServiceService } from "./login/login-service.service";

@Injectable()
export class DataServices{

    constructor(private http : HttpClient, private loginService : LoginServiceService){

    }

    getEmpleados(){
        const token = this.loginService.getIdToken();
        return this.http.get('https://realtime-angular-de4ac-default-rtdb.firebaseio.com/datos.json?auth='+token)
    }

    saveEmpleados(empleado:Empleado[]): void{
        this.http.put('https://realtime-angular-de4ac-default-rtdb.firebaseio.com/datos.json',empleado).subscribe(
            response=>console.log("Se han guardado los empleado: "+response),
            error=> console.log("Error: "+error),
        );
    }

    updateEmpleados(indice:number, empleado:{}){
        let url = "https://realtime-angular-de4ac-default-rtdb.firebaseio.com/datos/"+indice+".json";
        this.http.put(url,empleado).subscribe(
            response=>console.log("Se han modificado el empleado: "+response),
            error=> console.log("Error: "+error),
        );
    }

    deleteEmpleados(indice:number){
        let url = "https://realtime-angular-de4ac-default-rtdb.firebaseio.com/datos/"+indice+".json";
        this.http.delete(url).subscribe(
            response=>console.log("Se han eleiminado el empleado: "+response),
            error=> console.log("Error: "+error),
        );
    }
}