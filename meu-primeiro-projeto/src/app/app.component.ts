import { Component, OnInit,} from '@angular/core';

@Component({
  selector: 'app-root',
 template:`
 <!--
 <app-title *ngIf="destruir"></app-data-title>
 <br>
 <button (click)="destruirComonent()">Destruir componente</button>
 -->
 <app-diretivas-estruturais></app-diretivas-estruturais>
  <router-outlet></router-outlet>
 `,
})
export class AppComponent  implements OnInit{
  public destruir: boolean = true;
  constructor() {
  }

 ngOnInit(): void {

   }
 
}
