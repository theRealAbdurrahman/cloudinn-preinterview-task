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
    //scroablejs options
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
  /**
   * @description replaces homeworld url with it's name;
   *  
   */
  getHomeWorld() {
    // Array of homewords that should take place of search results homeworld url
    let homeworld = [];
    // iterate over every person object
    this.searchResults.forEach(result => {
      // store the homeworld url 
      let homeworldUrl = result['homeworld'];

      this.swAPI.getPlanet(homeworldUrl).subscribe(
        res => {
          // push the name of the homeworld to the homeworlds array
          homeworld.push(res['name'])
          //iterate over the search results and replace the homeworld url with the homeworld name stored in the homeworlds[]
          this.searchResults.map((searchResult, i) => {
            searchResult['homeworld'] = homeworld[i];
          })
        },
        err => console.log(err),
      )

    });

  }


}
