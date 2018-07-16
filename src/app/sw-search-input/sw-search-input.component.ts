import { SwAPIService } from './../sw-api.service';
import { SortablejsOptions } from 'angular-sortablejs/dist';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sw-search-input',
  templateUrl: './sw-search-input.component.html',
  styleUrls: ['./sw-search-input.component.css']
})
export class SwSearchInputComponent implements OnInit {
  searchStr: any = "";
  searchResults = [];

  options: SortablejsOptions;
  constructor(private swAPI: SwAPIService) { }

  ngOnInit() {
    this.options = {
      animation: 300,
      onUpdate: (e) => {
        // console.log(this.searchResults);
      }
    }
  }

  getPeople() {
    this.swAPI.getPeople(this.searchStr)
      .then(res => res['results'])
      .then(results => this.getHomeWorld(results))
  }

  getHomeWorld(results) {
    const x = this.swAPI
    results.forEach((result, i) => {
      this.swAPI.getPlanet(result['homeworld'])
        .then(homeworld => homeworld["name"])
        .then(homeworld => {
          console.log(this.searchResults);
          this.searchResults[i] = { ...result, ...{ homeworld } }
        })

    });
  }


}
