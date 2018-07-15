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
    this.swAPI.getPeople(this.searchStr).subscribe(
      (res) => {
        console.log(res['results'].length);
        this.searchResults = res['results'];
      },
      err => console.log(err),
      () => {
        this.getHomeWorld();
      }

    )
  }
  getHomeWorld(searchRes?) {
    let homeworld = [];
    this.searchResults.forEach(result => {

      let homeworldUrl = result['homeworld'];

      this.swAPI.getPlanet(homeworldUrl).subscribe(
        res => {
          homeworld.push(res['name'])
          this.searchResults.map((searchResult, i) => {
            searchResult['homeworld'] = homeworld[i];
            // console.log("search result", searchResult);

          })
        },
        err => console.log(err),
        () => {

        }

      )

    });

  }


}
