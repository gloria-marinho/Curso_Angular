import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-todo-list></app-todo-list>
  <router-outlet></router-outlet>
  ` 
})
export class AppComponent {
  
}
