import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // General variables
  state: number = 1;

  constructor() {

  }

  // Button Functions
  changeState(state: number) {
    this.state = state;
  }
}
