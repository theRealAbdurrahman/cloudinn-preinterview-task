import { Component } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs/dist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cities = [
    'Ankara',
    'Moscow',
    'Munich',
    'Paris',
    'Washington',
  ];
  options: SortablejsOptions;
  constructor() {

    this.options = {
      onUpdate: (e) => {
        console.log(e);
        console.log(this.cities);

      }
    }
  }
}
