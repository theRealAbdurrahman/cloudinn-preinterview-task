import { SwAPIService } from './../sw-api.service';
import { SortablejsOptions } from 'angular-sortablejs/dist';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sw-search-results',
  templateUrl: './sw-search-results.component.html',
  styleUrls: ['./sw-search-results.component.css']
})
export class SwSearchResultsComponent implements OnInit {
  searchStr: any = "";
  searchResults = [];

  options: SortablejsOptions;

  constructor(private swAPI: SwAPIService) { }

  ngOnInit() {
    this.options = {
      animation: 500,
      onUpdate: (e) => {
        console.log(this.searchResults);
      }
    }
  }

  getPeople() {
    this.swAPI.getPeople(this.searchStr).subscribe(
      (res) => {
        console.log(res);
        this.searchResults = res['results'];
      },
    )
  }


}
