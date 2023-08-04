import { Component } from '@angular/core';

@Component({
  selector: 'app-td-table',
  templateUrl: './td-table.component.html',
  styleUrls: ['./td-table.component.css']
})
export class TdTableComponent {
  arrayCaracts = [''];

    addCaracteristica(value:string){ 
        this.arrayCaracts.push(value);
    }
} 
