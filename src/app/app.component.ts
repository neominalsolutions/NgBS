import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // constructor(){
  //   setTheme('bs3')
  // }

  constructor() {
    setTheme('bs5'); // or 'bs4'
  }

  title = 'AngularBS';
}
